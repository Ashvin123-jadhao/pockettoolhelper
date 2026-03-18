
export function testRegex(pattern:string,text:string){
 const r = new RegExp(pattern,"g")
 return text.match(r)
}
