import { ROUTES } from "@/constants/routes"
import { writeFile } from "fs/promises"
import path from "path"

export const createQuery = (query: any, id?: string) => ({
  where: {
    id: id || "",
  },
  update: query,
  create: query,
})

export const createRelatedFieldQuery = (data: any, contactId: string) => {
  const { id, platformId, ...fields } = data

  const query = {
    ...fields,
    contact: {
      connect: {
        id: contactId,
      },
    },
    ...(platformId
      ? {
          platform: {
            connect: {
              id: platformId,
            },
          },
        }
      : {}),
  }

  return createQuery(query, id)
}

export const writeImage = async (imageFile: File) => {
  const buffer = Buffer.from(await imageFile.arrayBuffer())
  const filename = `${Date.now()}_${imageFile.name.replaceAll(" ", "_")}`
  const imagePath = path.join(
    process.cwd(),
    "/public",
    ROUTES.profilePictures(filename)
  )

  await writeFile(imagePath, buffer)

  return filename
}
