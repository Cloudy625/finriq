module.exports.execute = async (client, message, args) => {
  if (args.length) {
    args = args.join(' ').split(/,+ */);

    if (args.includes('')) {
      return await message.channel.send('Choices cannot be empty!');
    }

    if (args.includes('zach')) {
      return await message.channel.send('I choose **zach**!');
    }

    if (args.includes('Zach')) {
      return await message.channel.send('I choose **Zach**!');
    }

    const choiceIndex = Math.floor(Math.random() * args.length);
    return await message.channel.send(
      'I choose **' + args[choiceIndex] + '**!'
    );
  }

  return await message.channel.send(
    'Please specify the options I should choose from!\nHint: `.choose option1, option2, ..., optionX`'
  );
};

module.exports.config = {
  name: 'choose',
  aliases: ['choose', 'pick'],
  module: 'Fun',
  description: 'I will choose one of your options at random.',
  usage: ['choose option1, option2, ..., optionX'],
};
