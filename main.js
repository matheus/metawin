fetch('content.json')
  .then(res => res.json())
  .then(data => {
    document.getElementById('hero-title').textContent = data.hero.title;
    document.getElementById('hero-subtitle').textContent = data.hero.subtitle;
    document.getElementById('hero-cta').textContent = data.hero.cta;

    document.getElementById('stack-item1').textContent = data.stack.item1;
    document.getElementById('stack-item2').textContent = data.stack.item2;
    document.getElementById('stack-item3').textContent = data.stack.item3;
    document.getElementById('stack-item4').textContent = data.stack.item4;

    document.getElementById('bonus1').textContent = data.bonus.b1;
    document.getElementById('bonus2').textContent = data.bonus.b2;

    document.getElementById('price').textContent = data.price;
    document.getElementById('cta-final').textContent = data.cta_final;

    if (data.facebookPixelId) {
      const pixelScript = document.createElement('script');
      pixelScript.innerHTML = `
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '${data.facebookPixelId}');
        fbq('track', 'PageView');
      `;
      document.head.appendChild(pixelScript);

      const noScript = document.createElement('noscript');
      noScript.innerHTML = `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=${data.facebookPixelId}&ev=PageView&noscript=1"/>`;
      document.body.appendChild(noScript);
    }
  });