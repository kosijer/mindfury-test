![](https://github.com/kosijer/mindfury-test/blob/master/app/components/Banner/mindfury-banner.png)

## Mindfury - Technical Test
### <a href="https://github.com/kosijer/mindfury-test/blob/master/Mindfury%20Tech%20Test_%20Full%20Stack-2.pdf">PDF Instructions</a>

I used <a href="https://github.com/react-boilerplate/react-boilerplate">react-native boilerplate</a> as a base for the project. I hope this won't consider as a cheating. I just wanted to speed up the work and avoid hassle about installing all needed libraries.

Also, it seems that SmartCache is not supported by CoinCap anymore, so I decided to take the next popular block-chain currency which is Ethereum.

I created the mock of login and obviously it doesn't work, neither it stores the user details anywhere (if you refresh your browser it returns you to login form), but the wrapper and logic can be used later in case there is proper integration with the backend.

I am aware I hard-coded user's current amount of money and it would be better if I can enter my amount of BitCoins and Ethereums through a form instead.
I am also aware that other strings are hard-coded too. Usually where I work, we have translation file and constants files for all image paths and for all other data that might be reused, but this is small and quick project so I gave myself freedom to not do that.
Keeping the used colour as variable name would be easier to maintain in the future than using RGB codes around stylesheets. And not just colours, but also other values (margins, paddings, font-sizes etc)

Also, it would be better if I used single object to include all currencies data, for example:

    currencies: {
      bitcoin: {
        url: 'https://api.coincap.io/v2/assets/bitcoin',
        name: 'BitCoins',
        mine: 10,
        rate: null // which should be updated from API instead of using bitCoinRate / ethereumRate
      },
      ethereum: {
        ....
      },
      someOtherCurrency: {
        ....
      }
    },

In that case I would be able to do loop on InfoCards, something like 
```
Object.keys(currencies).forEach(key => {<InfoCard />})
```
and go through all available blockchains, no matter how big currencies object is.

All libraries I added are located in dev environment. I didn't test build process at all.

And yes... banner should definitely be better with the real text next to logo, better design etc.


I'm looking forward to your feedback.

Thank you,
Nebojsa

## Screenshots

![Chrome Login Screen](https://github.com/kosijer/mindfury-test/blob/master/screenshots/chrome_2018-11-29_02-19-20.png)
![Chrome Dashboard](https://github.com/kosijer/mindfury-test/blob/master/screenshots/chrome_2018-11-29_02-19-26.png)

![iPhone Login Screen](https://github.com/kosijer/mindfury-test/blob/master/screenshots/localhost_3000_(iPhone%205_SE).png)
![iPhone Dashboard](https://github.com/kosijer/mindfury-test/blob/master/screenshots/localhost_3000_(iPhone%205_SE)%20(1).png)
![iPhone Dashboard](https://github.com/kosijer/mindfury-test/blob/master/screenshots/localhost_3000_(iPhone%205_SE)%20(3).png)
