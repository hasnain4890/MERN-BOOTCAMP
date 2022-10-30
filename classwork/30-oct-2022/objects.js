const obj = {
  name: "hasnain ahmad",
  father_name: "abdul karim",
  age: 24,
  cal_percentage(t_marks) {
    english_marks = 100;
    urdu_marks = 100;
    maths_marks = 78;
    science_marks = 78;
    pak_study_marks = 78;
    res =
      ((english_marks + urdu_marks + science_marks + pak_study_marks) /
        t_marks) *
      100;
    return res;
  },
};
console.log(obj.name, obj.father_name, obj.age);
console.log(obj.cal_percentage(500));
