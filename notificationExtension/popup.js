document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('showNotification').addEventListener('click', function() {
        chrome.notifications.create(null, {
            type: 'basic',
            iconUrl: 'img/icon.png',
            title: 'Fighting !!!',
            message: '您刚才点击变强按钮 ！'
        });        
    
        console.log('执行了');
      });
    })