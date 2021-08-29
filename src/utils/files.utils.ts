export const to_base64 = (file?: File): Promise<string> => {
  return new Promise((resolve) => {
    const reader = new FileReader()
    reader.onload = function (event) {
      resolve(String(event?.target?.result))
    }
    if (file) {
      reader.readAsDataURL(file)
    }
  })
}

export const to_blob = (base64: string, type = 'application/pdf'): Blob => {
  const byte_chars = atob(base64 || '')
  const byte_nums = new Array(byte_chars.length)
  for (let i = 0; i < byte_chars.length; i++) {
    byte_nums[i] = byte_chars.charCodeAt(i)
  }
  const byte_array = new Uint8Array(byte_nums)
  return new Blob([byte_array], { type })
}

export const download_blob = (blob: Blob, name = 'file.txt'): void => {
  // Convert your blob into a Blob URL (a special url that points to an object in the browser's memory)
  const blob_url = URL.createObjectURL(blob)

  // Create a link element
  const link = document.createElement('a')

  // Set link's href to point to the Blob URL
  link.href = blob_url
  link.download = name
  // Append link to the body
  document.body.appendChild(link)

  // Dispatch click event on the link
  // This is necessary as link.click() does not work on the latest firefox
  link.dispatchEvent(
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
      view: window,
    })
  )

  // Remove link from body
  document.body.removeChild(link)
}
