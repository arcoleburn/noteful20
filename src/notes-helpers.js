
export const findFolder = (folders=[], folderId) =>
  folders.find(folder => folder.id === folderId)

export const findNote = (notes=[], noteId) =>{
  noteId=parseInt(noteId)
  return(
  notes.find(note => note.id === noteId)
  )}
export const getNotesForFolder = (notes=[], folderId) => {
  console.log('notes from get nores for folder: ', notes, typeof folderId)
  folderId = parseInt(folderId)
  return (
  (!folderId)
    ? notes
    : notes.filter(note => note.folder_id === folderId)
)}

export const countNotesForFolder = (notes=[], folderId) =>
  notes.filter(note => note.folder_id === folderId).length
