// https://connecter-fly.firebaseio.com/videos.json

let $ = console.log;

 
let data =[
    {"key":"-MXSvnos1AePEHGoVCBQ","time":"1617557404104","uid":"Ww5dAsRCCre5L7jrO7bPDsolDdw2","videoPath":"https://docjamal.xyz/wp-content/uploads/2020/08/video7.mp4"},
    {"key":"-MXI3oXc-j0jPKCTmcma","time":"1617375217448","uid":"Ww5dAsRCCre5L7jrO7bPDsolDdw2","videoPath":"https://firebasestorage.googleapis.com/v0/b/connecter-fly.appspot.com/o/vid%2FVIDEO_1617375183014.mp4?alt=media&token=c3c42d13-65a1-4222-a2e3-ed8e53881f45"},
    {"key":"-MXI-lIauykO4xtkR9XW","time":"1617374155628","uid":"Ww5dAsRCCre5L7jrO7bPDsolDdw2","videoPath":"https://firebasestorage.googleapis.com/v0/b/connecter-fly.appspot.com/o/vid%2FVIDEO_1617374115887.mp4?alt=media&token=f0fdf7a6-ce14-41a1-a801-dcda0ff1c074"},
    {"key":"-MXI-qlxRywTNTEFenVy","time":"1617374178051","uid":"Ww5dAsRCCre5L7jrO7bPDsolDdw2","videoPath":"https://firebasestorage.googleapis.com/v0/b/connecter-fly.appspot.com/o/vid%2FVIDEO_1617374044175.mp4?alt=media&token=169da27f-650b-4142-8ab6-0b712ec0a068"},
    {"key":"-MXI0-BCJrC4ttBsOQ3b","time":"1617374216595","uid":"Ww5dAsRCCre5L7jrO7bPDsolDdw2","videoPath":"https://firebasestorage.googleapis.com/v0/b/connecter-fly.appspot.com/o/vid%2FVIDEO_1617373992417.mp4?alt=media&token=4d1eb0f8-9913-4a77-ad10-f7ac36059cfe"},     
    {"key":"-MXI0ouK9_ylATuTRBXb","time":"1617374432610","uid":"Ww5dAsRCCre5L7jrO7bPDsolDdw2","videoPath":"https://firebasestorage.googleapis.com/v0/b/connecter-fly.appspot.com/o/vid%2FVIDEO_1617374385367.mp4?alt=media&token=26b6c28d-4c32-4d3a-8d2e-815642101085"},
    {"audio":"Audio","des":"Nice 👍👍👍👍#donuts #amazing #burjKhalifa","key":"-M_f1TZqt2eRNofyLS9j","time":"1620998480555","uid":"Ww5dAsRCCre5L7jrO7bPDsolDdw2","videoPath":"https://firebasestorage.googleapis.com/v0/b/connecter-fly.appspot.com/o/vid%2FVIDEO_1620998175293.mp4?alt=media&token=cd353dac-5c19-4b39-a68e-6a76e348bddd"},
    {"audio":"audio","des":"Amazing ","key":"-M_f1GPYaFCTUpCVgi8I","time":"1620998426648","uid":"Ww5dAsRCCre5L7jrO7bPDsolDdw2","videoPath":"https://firebasestorage.googleapis.com/v0/b/connecter-fly.appspot.com/o/vid%2FVIDEO_1620997760325.mp4?alt=media&token=c463d504-350b-4273-870d-b0da05583a5b"},
    {"audio":"Audio","des":"Mr.Bean Attitude Status","key":"-M_f18qWeuifdhBHUHef","time":"1620998395670","uid":"Ww5dAsRCCre5L7jrO7bPDsolDdw2","videoPath":"https://firebasestorage.googleapis.com/v0/b/connecter-fly.appspot.com/o/vid%2FVIDEO_1620997719940.mp4?alt=media&token=b788e097-f42f-4b11-9d01-0ffec050ea8f"},
    {"audio":"Tmkoc","des":"thanks","key":"-M_JxxxrB1WqcB4FqZ3A","time":"1620628201057","uid":"E8OiJtXL8wgS0ffmccbfC6Nvzac2","videoPath":"https://firebasestorage.googleapis.com/v0/b/connecter-fly.appspot.com/o/vid%2FVID-20210506-WA0002.mp4?alt=media&token=ebeefe5e-4911-4043-bd73-ac33b989ba14"},
    {"audio":"Tech Guruji","des":"Technical Guruji","key":"-M_2-2MJVsZovk-cRxQ8","time":"1620326757015","uid":"ZTpSbIXeqUSvYxhzTsl71IYHEeJ2","videoPath":"https://firebasestorage.googleapis.com/v0/b/connecter-fly.appspot.com/o/vid%2FVID-20210405-WA0012.mp4?alt=media&token=a369dc1e-8a05-406e-b6d0-0571de237213"},
    {"key":"-MXI1Iu4EhgwI7A6bD94","time":"1617374559518","uid":"Ww5dAsRCCre5L7jrO7bPDsolDdw2","videoPath":"https://firebasestorage.googleapis.com/v0/b/connecter-fly.appspot.com/o/vid%2FVIDEO_1617374535143.mp4?alt=media&token=3eb5b693-bc4b-47d9-812f-51a8e592b19f"}
]


let x = 0;
let hd = document.getElementsByClassName("heading");


hd.addEventListener("click",ex());

function ex()
{
    if(x <= data.length-1){
        let vid = document.getElementById("vid");
        let icon = document.getElementById("icon");
        vid.setAttribute("src", `${data[x].videoPath}`);
        icon.setAttribute("src", `https://source.unsplash.com/random`);
        x++;
    }else{
        x =0;
    }
};


