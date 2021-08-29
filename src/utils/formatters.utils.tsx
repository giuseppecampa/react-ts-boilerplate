import { opt } from 'src/types'

export const join_str = (...classes: opt<string>[]): string => {
  return classes?.filter((class_) => !!class_)?.join(' ')
}

export const fill_placeholders = (text = '', ...placeholders: opt<string>[]): string => {
  let res = text
  placeholders.forEach((placeholder) => {
    res = res.replace('***', placeholder || '')
  })
  return res
}

export const fill_strong = (text: string, strong_class?: string): JSX.Element => {
  const text_pieces = text.split('<strong>')
  return (
    <span>
      {text_pieces.map((str, idx) =>
        idx % 2 === 0 ? (
          str
        ) : (
          <strong key={idx} className={strong_class}>
            {str}
          </strong>
        )
      )}
    </span>
  )
}
