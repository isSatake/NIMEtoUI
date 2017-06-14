const tex = decodeURI(location.search.substring(1))
console.log(tex)
const entry = bibtexParse.toJSON(tex)[0].entryTags
let authors = ''
console.log(entry.Author)
entry.Author.split(' and ').map((str) => {
  const link = ' [' + str + ']\n'
  authors += link
})

const n = '\n'
const uiBody =  entry.Title + n +
                        '[* タイトル]' + n +
                        ' [' + entry.Title + ' ' + entry.Url + ']' + n +
                        '[* 著者]' + n +
                        authors +
                        '[* ソース]' + n +
                        ' ' + entry.Booktitle + n +
                        '[* ページ]' + n +
                        ' ' + entry.Pages + n +
                        '[* 年]' + n +
                        ' ' + entry.Year + n +
                        '[* 概要]' + n +
                        ' ' + entry.Abstract + n +
                        '[* コメント]' + n + n +
                        '[NIME] [音楽] [楽器]'

window.open('https://scrapbox.io/UIPedia/' + entry.Title + '?body=' + encodeURI(uiBody))
