import React from 'react'
import '../../../Asset/style/style.css'

const Music_M = () => {
    return (
        <> 
    <div class="wrapper_Music">
       <div class="p_list">
       <iframe width="100%" height="100%" src="https://www.youtube.com/embed/jWz5on5N14E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style={{'borderRadius':'5px'}}></iframe>
       </div>
       <div class="player_Music">
        <div class="header_Music">
            <div class="header_singer_rating">
                 <h3>Album Name</h3>
                 <h3>4.5/5</h3>
            </div>
            <div class="header_singer_info">
                <p>Singer name</p>
                <p>2019</p>
                <p>10 Song</p>
                <div class="dot_Music">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>

         </div>

         <div class="list_Music">
            <ul>
                <li>
                    <span><i class="fas fa-play"></i></span>
                    <span>DROPTOP - AP Dhillon | Gurinder Gill | Gminxr</span>
                    <span>5:05</span>
                </li>
                <li>
                    <span><i class="fas fa-play"></i></span>
                    <span>Takeover (feat. AR Paisley)</span>
                    <span>5:05</span>
                </li>
                <li>
                    <span><i class="fas fa-play"></i></span>
                    <span>FOREIGNS - AP DHILLON | GURINDER GILL | MONEY MUSIK</span>
                    <span>5:05</span>
                </li>
                <li>
                    <span><i class="fas fa-play"></i></span>
                    <span>Otnicka - Where Are You | PEAKY BLINDERS</span>
                    <span>5:05</span>
                </li>
                <li>
                    <span><i class="fas fa-play"></i></span>
                    <span>Otnicka - Peaky Blinder (lyrics) | i am not outsider i'm a peaky blinder</span>
                    <span>5:05</span>
                </li>
            </ul>
         </div>
       </div>
    </div>
        </>
    )
}

export default Music_M
