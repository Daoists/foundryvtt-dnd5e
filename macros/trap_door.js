 (
  function() {
    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
    }

    // Getting DC
    let trapDC = getRandomInt(10, 15);

    // Getting damage die
    let damageDie = getRandomInt(0, 2) ? "1d12" : "2d6";

    // Create chat content
    let chatContent = `
    <b>Trap activated!</b>
    <br>Roll a Survival check! (DC ${trapDC})
    <hr>Take [[/r ${damageDie}]]  damage on a failed check,
    or half as much damage on a successful one.
    `;

    let chatData = {
      user: game.user._id,
      speaker: ChatMessage.getSpeaker(),
      content: chatContent,
      type: CONST.CHAT_MESSAGE_TYPES.OTHER
    };
    ChatMessage.create(chatData);
  }
)();
