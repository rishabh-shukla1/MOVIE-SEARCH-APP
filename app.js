

let input=document.querySelector('input')
let button=document.querySelector('button')
let list=document.querySelector('#list')


button.addEventListener('click',function()
{

    let searchtext=input.value;
    // console.log(searchtext)

    let data=fetchData(searchtext)
    input.value=' '

})

function fetchData(searchtext)
{
    axios.get(`https://api.tvmaze.com/search/shows?q=${searchtext}`)
    .then(function(response){
    console.log(response.data)

    manipulatedom(response.data)
    

})



}




function manipulatedom(datas)
{
    while(list.firstChild)
        {
            list.firstChild.remove();
        }

        
    for(data of datas)
    {
        let figure=document.createElement('figure')

        if(data.show.image)
        {
            figure.innerHTML=
                `<img   src=${data.show.image.original} />
                <h2> ${data.show.name} </h2>
                <p>${data.show.summary}</p>
                `


              
                
            
            list.appendChild(figure)
        }

    }

}

