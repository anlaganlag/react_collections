import React, {useState, useEffect } from 'react'
import './css/scareMe.css'
import moment from "moment";
// import searchTerm from '../App'
import {keyWord} from '../reducer'


let searchTerm = keyWord

let mapPornURL =
  `https://www.reddit.com/r/${searchTerm}/random.json`

const getRandom = async (url: string) => {
  const response = await fetch(url)
  return response.json()
}

const clearAndSetReceivedImage = (url: string,imageTitle:string,createdTime:string) => {
  const img = document.createElement('img')
  const title = document.createElement('span')
  const created = document.createElement('span')


  title.innerHTML = imageTitle
  created.innerHTML = `(${createdTime})`
  created.classList.add('created')

  img.setAttribute('src', url)
  img.onclick = () => {
    getRandomTechSupportGorePost()
  }

  

  const scareMe = document.querySelector('.Scare-Me')

  if (scareMe) {
    scareMe.innerHTML = ''
    scareMe.appendChild(title)
    scareMe.appendChild(created)
    scareMe.appendChild(img)
    
  }
}

const getRandomTechSupportGorePost = async () => {
  const randomRedditPost = await getRandom(mapPornURL)
  console.log(typeof randomRedditPost,"randomPost的类型");

  const postData = randomRedditPost?.[0]?.data?.children?.[0]?.data
  // const postData = randomRedditPost?.data?.children?.[0]?.data
  const mediaID = postData?.gallery_data?.items?.[0]?.media_id
  console.log(randomRedditPost,"randomPost的实体",mapPornURL);
  
  if (
    randomRedditPost?.[0]?.data?.children?.[0] &&
    postData.post_hint === 'image'
  ) {
    clearAndSetReceivedImage(postData.url,
      postData.title,
      moment(postData.created * 1000).fromNow(),
    )
  } else if (
    randomRedditPost?.[0]?.data?.children?.[0] &&
    (!postData.gallery_data || !postData.gallery_data.items[0].media_id)
  ) {
    getRandomTechSupportGorePost()
  } else {
    clearAndSetReceivedImage(
      postData.media_metadata[mediaID].s.u.split('amp;').join(''),
      // postData.url,
      postData.title,
      moment(postData.created * 1000).fromNow(),

    )
  }
}

const ScareMe = () => {
  const [input, setInput] = useState(keyWord)
  function handleSubmit (e:any) {
    e.preventDefault();
    console.log("e",e.target[0].defaultValue);
    

    // searchTerm=e.target[0].defaultValue
    searchTerm =e.target[0].defaultValue
    mapPornURL =`https://www.reddit.com/r/${searchTerm}/random.json`
    console.log("在提交後",mapPornURL);
    getRandomTechSupportGorePost()

    
  }

  useEffect(() => {
    getRandomTechSupportGorePost()
    console.log("in Effect s",searchTerm);
    
  }, [])
  console.log("searchTerm",searchTerm);
  

  return (
      <>
    <form onSubmit={handleSubmit}>

    <input value={input} onChange={(e)=>setInput(e.target.value)}></input>
    <p>{searchTerm}</p>
    </form>
    <div className='Scare-Me'></div>
      </>
    )
}

export default ScareMe
