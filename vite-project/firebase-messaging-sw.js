if ('serviceWorker' in navigator) {
    self.addEventListener('load', () => {
        navigator.serviceWorker.register('../firebase-messaging-sw.js')
            .then(registration => {
                console.log('ServiceWorker registration successful with scope: ', registration.scope);
            })
            .catch(error => {
                console.error('ServiceWorker registration failed: ', error);
            });
    });
    self.addEventListener('push', event => {
        const data = event.data.json(); // Assuming the payload is in JSON format
      
        const options = {
          body: data.body,
          icon: '/path/to/your/icon.png',
          data: {
            url: data.link, // Customize the link to open when the notification is clicked
          },
        };
      
        event.waitUntil(
          self.registration.showNotification(data.title, options)
        );
      });
}