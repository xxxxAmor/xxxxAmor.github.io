const ap = new APlayer({
    container: document.getElementById('aplayer'),
    autoplay: false,
    loop: 'all',
    volume: 0.7,
    listFolded: true,
    listMaxHeight: 60,
    audio: [
        {
            name: 'Burgundy Red',
            artist: '落日飞车',
            url: 'https://music.163.com/weapi/copyright/pay_fee_message/config?csrf_token=',
            
        }
       
    ]
});