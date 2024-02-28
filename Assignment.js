
str1='thequickbrownfoxjumpsoverthelazydog'
lst=str1.split('')
console.log(lst)
lst2=[]
i=0
for(let x of str1){
    i++
    if(lst.includes(x,i))
    {
       
        lst2.push(x)
    }
    else{
        lst2.push(x)
    }
   

}
console.log(lst2)