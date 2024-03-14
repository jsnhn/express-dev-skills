const skills = [
    {id: 125223, skill: 'My frontend skills', level: 4},
    {id: 127904, skill: 'My backend skills', level: 2},
    {id: 139608, skill: 'My computer programming vocabulary', level: 3}
  ];
  
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
  };
  
  function getAll() {
    return skills;
  }

  function getOne(id) {
    // URL params are strings - convert to a number
    id = parseInt(id);
    // The Array.prototype.find iterator method is
    // ideal for finding an object within an array
    return skills.find(skill => skill.id === id);
  }

  function create(skill) {
    skill.id = Date.now() % 1000000;
    skills.push(skill)
  }

  function deleteOne(id) {
    id = parseInt(id)
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
  };