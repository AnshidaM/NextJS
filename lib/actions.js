"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

const isInvalidText = (text) => {
  return !text || text.trim() === "";
};

export const shareMeal = async (prevState, formData) => {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    meal.image.size === 0
  ) {
    // throw new Error("Invalid Input!");
    return {
      message: "Invalid input",
    };
  }
  await saveMeal(meal);
  revalidatePath("/meals");
  //   if we set thes second argument to page , then only the page.js file will be revaluated .if set to layout, then all the nested files will be revaluted during the build time=> throws away the cache associated with these pages
  //   revalidatePath("/",'layout'); for revlaidating all the pages
  redirect("/meals");
};
