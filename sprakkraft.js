function sprakkraftSignIn(activated, langLevel, lang, clientId) {

  if (parseInt(activated) === 1) {
    lingVisSdk.setClientId(clientId)
    lingVisSdk.signInAnonymous(() => {
      lingVisSdk.updateSettings('sv', parseInt(langLevel), lang, () => {

        const nodes = document.querySelectorAll('[id*=\'sprakkraft\']');
        let arrayOfElements = [];
        nodes.forEach((node) => arrayOfElements.push(document.getElementById(node.id)));
        lingVisSdk.prepare(arrayOfElements);
      });
    });
  }
}

