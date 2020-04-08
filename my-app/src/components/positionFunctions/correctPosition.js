export function correctPosition(indentValue) {
  if(indentValue > 160) {
    let excess = (indentValue - 130) % 33;

    if(excess >= 15) {
      return indentValue += (33 - excess);
    }else if(excess < 15) {
      return indentValue -= excess;
    }

  }else if(indentValue >=145 && indentValue <= 160) {
    return indentValue = 160;
  }else if(indentValue < 145) {
    return indentValue = 130;
  }
}