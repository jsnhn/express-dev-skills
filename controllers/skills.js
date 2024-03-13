const Skill = require('../models/skill')

module.exports = {
    index,
    show,
    new: newSkill,
    create,
};

function index(req, res) {
    res.render('skills/index', {
      skill: Skill.getAll(),
      title: 'All Skills'
    });
  }

  function show(req, res) {
    res.render('skills/show', {
      skill: Skill.getOne(req.params.id),
      title: 'All Skills'
    });
  }

  function newSkill(req, res) {
    res.render('skills/new', {
      title: 'Add a Skill'
    })
  }

  function create(req, res) {
    Skill.create(req.body)
    res.redirect('/skills')
  }