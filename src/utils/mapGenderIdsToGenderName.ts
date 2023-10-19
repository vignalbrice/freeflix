import { Gender } from "@/types/Gender";

export const mapGenderIdsToGenderName = (genderIds: string[], gender: Gender[]) => {
  const genders: string[] = [];
  // get genders name by gender ids
  for (let i = 0; i <= genderIds?.length; i++) {
    if (genderIds[i] === undefined) {
      break;
    }
    for (let x = 0; x <= gender.length; x++) {
      if (gender[x]?.id === Number(genderIds[i])) {
        genders.push(gender[x]?.name)
      }
    }
  }

  return genders;
}