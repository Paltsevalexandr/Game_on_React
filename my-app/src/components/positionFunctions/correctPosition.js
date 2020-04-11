export function correctPosition(indentValue) {
  if(indentValue > 165) {
    let excess = (indentValue - 132) % 33;

    if(excess >= 15) {
      return indentValue += (33 - excess);
    }else if(excess < 15) {
      return indentValue -= excess;
    }

  }else if(indentValue >=145 && indentValue <= 165) {
    return indentValue = 165;
  }else if(indentValue >= 429){
    return indentValue = 429;
  }else if(indentValue < 145) {
    return indentValue = 133;
  }
}
