import styles from '../styles/Home.module.css'
import Image from 'next/image';
import Head from 'next/head';
import Input from '../components/Input/Input';
import Item from '../components/Item/Item';
import { useEffect, useState } from 'react';

export default function Home(): JSX.Element {
  const [count, setCount] = useState(0)
  const [county, setCounty] = useState(0)
  const backpack = 54.99;
  const shoes = 74.99;
  let price = count
  let rice = county
  useEffect(() => {
    price;
    rice
    return () => {
      
    }
  }, [price, rice])
 

  return (
    <>
    <Head><title>Checkout page</title></Head>
    <div className={styles.wrapper}>
      <h1 className={styles.headerh1}>Checkout</h1>
      <div className={styles.container}>
        <section className={styles.inputFields}>
          <h2 className={styles.headerh2}>Contact infomation</h2>
          <form >
            <label className={styles.label}>E-mail</label>
            <Input placeholder='Enter your email...' required pattern='^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$' type='email'></Input>
            <label className={styles.label}>Phone</label>
            <Input placeholder='Enter your phone... ' required pattern='(?=(?:^(?:\+?1\s*(?:[.-]\s*)?)?(?!(?:(?:.*\(.*)|(?:.*\).*)))(?:[2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))|(?:.*\((?:[2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\).*))(?:\+?1\s*(?:[.-]\s*)?)?(?:\(?([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\)?)\s*(?:[.-]\s*)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d{1,15}))?$' type='tel'>

            </Input>
            <h3 className={styles.headerh3}>Shipping address</h3>
            <label className={styles.label}>Full name</label>
            <Input placeholder='Enter your name...' type='text' required></Input>
      
            <label className={styles.label}>Address</label>
            <Input placeholder='Your address..' type='text' required></Input>
            <label className={styles.label}>City</label>
            <Input placeholder='Your city..' type='text' required></Input>
            <div className={styles.flexcountry}> 
                <div className={styles.flexcountryitem}>
                <label className={styles.label}>Country</label>
                  <input placeholder='Your country..' className={styles.country} type="text" list="country" required/>
                  <datalist id="country">
                      <option>Russia</option>
                      <option>China</option>
                      <option>Japan</option>
                      <option>Korea</option>
                  </datalist>
                </div>
                <div className={styles.flexcountryitem}>
                <label className={styles.label_right}>Postal code</label>
                  <input placeholder='Your postal code..' className={styles.country} pattern='[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]' type='text' required></input></div>
            </div>
            <div className={styles.submitbox}>
              <input type="checkbox" name="check" className={styles.check} />
              <label className={styles.labelbot}>Save this information for next time</label>
                        <input type="submit" className={styles.subtn} value="Submit" />
            </div>
          </form>
        </section>
        <section className={styles.productField}>
          <Item>
            <Image
            src='/photo1.png'
            width={154}
            height={156}
            alt='product'
            />
            <div>
              <p>Vintage Backbag</p>
              <p>$54.99</p> <s>$94.99</s>
              <div className={styles.productCount}>
              <button onClick={() => setCount(Math.max(count - 1, 0))}>-</button>
                <span>{count}</span>
                <button onClick={() => setCount(count + 1)}>+</button>
              </div>
            </div>
          </Item>
          <Item>
            <Image
            src='/photo2.png'
            width={154}
            height={156}
            alt='product'
            />
            <div>
              <p>Levi Shoes</p>
              <p>$74.99</p> <s>$124.99</s>
              <div className={styles.productCount}>
                <button onClick={() => setCounty(Math.max(county - 1, 0))}>-</button>
                <span>{county}</span>
                <button onClick={() => setCounty(county + 1)}>+</button>
              </div>
            </div>
          </Item>
          <hr />
          <div className={styles.totalflex}>
            <span>Shipping</span> <span>$19</span>
          </div>
          <hr />
          <div className={styles.totalflex}>
            <span>Total</span> <span>{Number(price * backpack + rice * shoes + 19).toFixed(2)}</span>
          </div>
        </section>
      </div>
    </div>
    </>
  )
}
