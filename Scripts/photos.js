const photos = [
    "https://lh3.googleusercontent.com/pw/ADCreHd3AMiyUeQSGL_LoHA2Gme6AhTwHfNadsVxgRKBf5G767P1hMIVvQhm8D2gp5XFHqxfoN1hXYzzGDRkG_pHSwF4W7avUd9lLfnLWqXn-BBl3fTSd4k=w1920-h1080", 
    "https://lh3.googleusercontent.com/pw/ADCreHe8unMEcJIrguq60SpBqOa8MdTYSYo2_rzbJp5cCEN2ij0L5vcY8gAwhdBXMRDzjzYJO9MhM2TtCLAZHQvnlWbI5A_GEQOe1FeAPzYVwrz2_xnlGyI=w1920-h1080", 
    "https://lh3.googleusercontent.com/pw/ADCreHeWDUbLmjoyS18P2mSjX-H_oITNmbdoV7PNLYV-xnGaZjGuGJMTvQrtvt_WwvT52XOlaRzGjfxkAq3MRxS9tBdEOU8iv44aKlWvYbRAMHaR5QPO_EI=w1920-h1080", 
    "https://lh3.googleusercontent.com/pw/ADCreHdtKjK06LsTtaHPp52HD2LXzksOM7E3P-f1MmXM5fulLDgfcSf9C-mfU88Bwh0J23TLRyKgOLPY-6q8C_lB8fswELkn49zjQF_6mkfNMjBtaQ7g2x4=w1920-h1080",
    "https://lh3.googleusercontent.com/pw/ADCreHcfuxxK_Keh3x3RlDQbg6xgTy3a1mmWBRb_XIxIO0ZfxMoQDJBw2a8lQn5jiqIsGkU_7jddly8HS7n62ez1WucCMz7xDoveB3TAu_QKHqXA8-65HGc=w1920-h1080",
    "https://lh3.googleusercontent.com/pw/ADCreHfrLv7tgsqnPS-ooCF2lq4WNqQmOjKiHCQYXrsNzWqltdJSX94UfzXD0ISilQ-58J0875ZbgGXGGrHor7sXFmbMsy0Mrc2_kKqvFe3rD0vqy3mjQeQ=w1920-h1080",
    "https://lh3.googleusercontent.com/pw/ADCreHdzHDq4svkqpiM8dvuZH_Mr8acPe92VdkviPKTx7IGHdNH-gj1B59UOsrBx3OhFWrX9NPpE4U3lLwLXBTGYvLflQw9Xtkg-IiitjFzOakVP9RUrdaQ=w1920-h1080",
    "https://lh3.googleusercontent.com/pw/ADCreHe5Kmcv4ZoC5vo74CDNR5AsliEpVZtuqLCFe16rqT0Ts51xT8lJrQ6MBPSudeWKUpKTCkTMCx5sU4JXc0yUZpCD224O1OuzfRDWGPe0lTnqBkHHAP4=w1920-h1080",
    "https://lh3.googleusercontent.com/pw/ADCreHeYWuZSfEkcB3a31avxAyLgvu1GQu8KASbqLYiOoEZqTacZrJjwfHIaZC875HWQNRnMSQRGSBWzc2AuvQKr7CB78loA6RJR9wGk3R8Js_nmWNJqP9o=w1920-h1080",
    "https://lh3.googleusercontent.com/pw/ADCreHdb9YOF0KbuOgmfjbvaAl85xDjlr2qNLzCLDMuOwKjUBMgwMkq70ggJYtz-bIUx1JOa_kca4G33cuHB-yWvoYzwyRrv9FFUMz2hIZB8wE5tFcajpZE=w1920-h1080",
    "https://lh3.googleusercontent.com/pw/ADCreHfHd_mgMUq6C3O0GE9TG79WBGWizupostvLAXvWdoTOySxuKvEjltzu6lhS8F69O8UuQTwvrHq-TimFtX1QceirPIeOPsZj4kpTOlSbRWHbqN6Drqk=w1920-h1080",
    "https://lh3.googleusercontent.com/pw/ADCreHczz0KoNbShXcfH4vYll0-2SD-Dvhlbe_JKFAb6Ukip9lGeUTKrXq3t8nt1ygc9O6AqfgxJuGEymJkizZqUbXkJ4xsIg_3hAbog5TMxH-o5Z8IpoyA=w1920-h1080",
    "https://lh3.googleusercontent.com/pw/ADCreHf_KspGupBct50B3hbez-7rk40WsaR2y9hnPeW4eIm99c7cGyDFhOzZRP6WMRPnxAZvXSWf5L0iCD17rOj-2h3hT9er3b6-pKDN3RuCiCJl5IacgsM=w1920-h1080",
    "https://lh3.googleusercontent.com/pw/ADCreHd_HqHPhCPeuxEGcq12owoQdOgcD5Xe5fM2Nz9oBqyNPdgSGzGKMCJDxfwPHksxL3dwDmV8y7dOKlB8ILHyZ1_oUMoCyRCk5MlZE4Hidqrg_JdvQV0=w1920-h1080",
    "https://lh3.googleusercontent.com/pw/ADCreHdA7UeMUJRdyoo9_dLZJIHeXXMvRHKI3ZbwmQ71l_hpjNK0tIfrxiFLMHAV7CLmj0Uj8RBp-5tNATUnSKVoA0n36Bw88vQAjlNhrt3vpYPDKovSvzU=w1920-h1080",
    "https://lh3.googleusercontent.com/pw/ADCreHf2MhkkC-gAr0jMslabUVrLBpUgp4DGrU3lbIJt8EvLJTv2SMb6eY8xKVrzjYXi2VJCDXHJhXmkvlJ_PnYB9hQOsu9TxzGZuLxDrJ9P0PPHEb5pgAk=w1920-h1080",
    "https://lh3.googleusercontent.com/pw/ADCreHeO_5wjPFHZecMvTHOTKe_joCAHytUT2PjjupAln8hvqkgdHPZ7P9tiHMzU92LXVcD9TQJdLcJ7Xz8J5Pizxhl1VIIbhrbzWYec-CELF4Cz6baBakQ=w1920-h1080",
    "https://lh3.googleusercontent.com/pw/ADCreHeMHN9BifO-tOyMn056sXXs-LmHBUctJYvuWFnLwEHGH7z5lQOxhVA4Y5D5A_q1tnA5gNMsf577QK2ulKhkA96LbHIbbLOihraa8-7gx9YvYByjgKM=w1920-h1080",
    "https://lh3.googleusercontent.com/pw/ADCreHc51iCZ6ozipkJ0i77BPjjLU54b0wGlYq6UMFh5_Q5T_uyBj_W1CNVo3c_SOmNy5W0qZyIIlSCrirn5c39n7FoXQllLy1Ha1Qe2gnJkFe60XkBE0Pw=w1920-h1080",
    "https://lh3.googleusercontent.com/pw/ADCreHcK_vuzZNRD1E-vJO8VmSpElq-MWjZLUxOaO24kPk2e9RDtH5bo5tCoeD5lz8KnVft3N4SC2k0Ton0SWimkjSEutC4chv4vael0GqTTtKYx_3dVxJY=w1920-h1080",
    "https://lh3.googleusercontent.com/pw/ADCreHcaYeSOMeo4uRrbMg83pLVhugNVO2u9sjXJ--bNwwzyxTEhIg5Roa7pBAPuGz51_Qa2RLFBJA7CNIpusyf6A6eS7021Fgo43IacrTTCXutqjt19Zug=w1920-h1080",
    "https://lh3.googleusercontent.com/pw/ADCreHeIWtirzJgYdhss5hXI0nC9sxQ6P1A0QXQpeFukj0LexQ90ZuQeUMdtncxTVJjM9LCBCX7JRBmh6eG5zCuhYxs6qL3eGRLGUVvYJJ7f_7Nyk9oEiZQ=w1920-h1080",
    "https://lh3.googleusercontent.com/pw/ADCreHed466IGO-ActkXHkLbBbfYkVuSU1l9UEyE4GR7QFz_yroEsi1cG2eJb4tg5LFeQX7tLVpqx7KTcbRk8MZaakx1_ptEduRIsKiiHQKbuOMXXVF7Vak=w1920-h1080",
    "https://lh3.googleusercontent.com/pw/ADCreHdcviiiBEdIAS0HiaIpQ_HSAG3FhlHboLJlj7S15bwXhDxArv8UQxtQTxOvjWChXlS6NCu-oxNaq7NHZGgbm_K99t371oL8AOBnfFgJXtYFBJLuN9M=w1920-h1080",
    "https://lh3.googleusercontent.com/pw/ADCreHfiJsup6KS2baxS87eMCPdpxhl0OwwM-Q8hy4WoVQURwqJLfZcr50dh9-83N0qhsnHTXp3DUXilTni3J325qrPlCLXtRo3XLPIelK3hYy6UOUj0kLo=w1920-h1080",
    "https://lh3.googleusercontent.com/pw/ADCreHcpP4BTFBSRiLcNAllpPyLKrWku30zuTnYkGB4ETyK2v60lVMdvDFwhqlzJHqdc3XGObEseTcRtGfmhbEz8y5D2RU_YYNEhjBnfT9J_L1K0FIzGbbE=w1920-h1080",
    "https://lh3.googleusercontent.com/pw/ADCreHdLHn0Qd4O1-ZxyGnNAnosbsIdeQWuYRaXRHiZrQCZUBABtnSnzlnGaqSXqdwag63mPzi9-0nX9n8LSSo3mSmjpHxZnBGHf3hKPiJqGdmZz1UGjq5s=w1920-h1080",
    "https://lh3.googleusercontent.com/pw/ADCreHcJdZC6GlRpdcZVc37wlYqIUeW9n9LDatOsscgbNJtKcSmiOc7GUC7_d3jU98_KhIKTPswS4XXmrRJn4Ztu8TqY9LYiMbQ3j-fn4YDImicZ-lIMUrw=w1920-h1080",
    "https://cdn.discordapp.com/attachments/1160772341291294782/1160772519540834424/IMG_8234.jpg?ex=6535e0a6&is=65236ba6&hm=a9a46fd8af8e6026c163dbab2384e17f6f20de4d2a5abfb6f91b6d3e2738ddee&",
    "https://cdn.discordapp.com/attachments/1160772341291294782/1160772519905722449/IMG_8237.jpg?ex=6535e0a6&is=65236ba6&hm=ef2204a02ab5026d8bf8b565212cb7032e568cdefe9c9a2335f159ad67ed333a&",
    "https://cdn.discordapp.com/attachments/1160772341291294782/1160772520341934170/IMG_8238.jpg?ex=6535e0a6&is=65236ba6&hm=d5891d166f159ec17d5457df47235bf815e3950e70a4733c2beff0893fbac479&",
    "https://cdn.discordapp.com/attachments/1160772341291294782/1160772520643936286/IMG_8214.jpg?ex=6535e0a7&is=65236ba7&hm=c1967ba4bf5cf157c7247f84f2de0bdf6527ca62764434c94b1994ebb6229a21&",
    "https://cdn.discordapp.com/attachments/1160772341291294782/1160772520962687016/IMG_8215.jpg?ex=6535e0a7&is=65236ba7&hm=8e2641846cf4ec3851a0e117edbcd7ab4ce034167269fc5ab83ffba00d1ae764&",
    "https://cdn.discordapp.com/attachments/1160772341291294782/1160772521294041210/image000000.jpg?ex=6535e0a7&is=65236ba7&hm=e2c2aa9ddbeb6ecb402654a05329aded9662b253aaf018121a5bc241a614610c&",
    "https://cdn.discordapp.com/attachments/1160772341291294782/1160772521541517432/image000000.jpg?ex=6535e0a7&is=65236ba7&hm=77fcacecab3ee2ae43e96863187c257c52e61d9cf4e91029a61c6a7e89a36781&",
    "https://cdn.discordapp.com/attachments/1160772341291294782/1160772521927376936/image000000.jpg?ex=6535e0a7&is=65236ba7&hm=33b170cd345148705d3f3d337edf81eb74e270048e4ed75c51f8568abe970e5e&",
    "https://cdn.discordapp.com/attachments/1160772341291294782/1160772522158067782/image000000.jpg?ex=6535e0a7&is=65236ba7&hm=067fec1975185dc8bbd93449526f883cbb970bf4e7bc4a1b9b1811de8c1f0523&",
    "https://cdn.discordapp.com/attachments/1160772341291294782/1160772522384572486/image000000.jpg?ex=6535e0a7&is=65236ba7&hm=cdda36719030621ef526a4871d414d112cdb114fbd9ce6f0008b6c3344e4a0da&"
];

const currImg = document.getElementById("currImg");
const photosContainer = document.getElementById("photosContainer");
const slideBackground = document.getElementById("slideBackground");
const currImgContainer = document.getElementById("currImgContainer");
var currImgIndex = 0;
var totalImgs = photos.length;
var isFullscreen = false;

function nextImg() {
    currImgIndex++;
    updateImg()
}
function prevImg() {
    currImgIndex--;
    updateImg()
}
function updateImg() {
    currImg.src = photos[mod(currImgIndex, totalImgs)];
    // console.log(newIndex);
}

function mod(n, m) {
    return ((n % m) + m) % m;
}

function fullscreen() {
    if (isFullscreen) {
        photosContainer.className = "photosContainer mt-5";
        slideBackground.className = "slideBackground";
        currImgContainer.className = "currImg";
        contactInfo.hidden = false;
    } else {
        photosContainer.className = "fullPhotosContainer";
        slideBackground.className = "fullSlideBackground";
        currImgContainer.className = "fullCurrImg";
        contactInfo.hidden = true;
    }
    isFullscreen = !isFullscreen;
}

window.onload = updateImg();