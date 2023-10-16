function writeCards(namesArray, eventName) {
    const messages = [];

    for (let i = 0; i < namesArray.length;) {
        const message = `Thank you, ${namesArray[i]}, for the wonderful ${eventName} gift!`;
        messages.push(message);
    }

    return messages;
  }

    const names = ["Alice", "Bob", "Charlie"];
    const event = "birthday";
    const cards = writeCards(names, event);

for (const card of cards) {
  console.log(card);
}

