const skills = [
    {id: 125223, skills: 'My frontend skills', level: 4},
    {id: 127904, skills: 'My backend skills', level: 6},
    {id: 139608, skills: 'My computer programming vocabulary', level: 7}
  ];
  
  module.exports = {
    getAll,
  };
  
  function getAll() {
    return skills;
  }