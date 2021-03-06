module.exports = {
  inputs: {
    criteria: {
      type: 'json',
      custom: (value) => _.isArray(value) || _.isPlainObject(value),
    },
  },

  async fn(inputs, exits) {
    const boards = await Board.find(inputs.criteria).sort('position');

    return exits.success(boards);
  },
};
