function ageFormBirthDate(birthDate) {
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const months = today.getMonth() - birthDate.getMonth();
    if (months < 0 || (months === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  module.exports = {
    ageFormBirthDate
  }