import React from 'react'

const arrA = [
  {
    icon: `fa-address-card`,
    te: `Digital Marketing`,
    ds: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, ullam perferendis dignissimos eos nihil deserunt minima doloremque veritatis inventore repellendus ipsa illo quibusdam temporibus harum consectetur voluptatibus nesciunt amet quis?`,
  },
  {
    icon: `fa-android`,
    te: `Logo Designing`,
    ds: `Maxime cumque quasi ratione saepe optio veniam porro laboriosam pariatur commodi quia eaque consequatur ea odit obcaecati tempore, necessitatibus veritatis quos adipisci enim tempora excepturi repellendus quis! Quibusdam, iure illum?`,
  },
  {
    icon: `fa-amazon`,
    te: `Business consulting`,
    ds: `Magnam ducimus, repudiandae ad nobis incidunt culpa saepe labore quaerat excepturi repellat et numquam laborum fuga cupiditate reiciendis iste quasi hic nulla libero ratione accusantium corporis natus distinctio. Minus, numquam.`,
  },
  {
    icon: `fa-camera-retro`,
    te: `Videography`,
    ds: `Nostrum eveniet amet earum incidunt? Quo, debitis! Dolore optio quo, expedita eos minus, aut placeat cupiditate amet nam, suscipit nihil quisquam. Repellendus, accusantium odit temporibus dolorum nesciunt voluptatum neque atque.`,
  },
  {
    icon: `fa-microchip`,
    te: `Brand Identity`,
    ds: `Perferendis, praesentium laborum eveniet iusto ipsa sed ipsam repellendus dolor tempore eos aliquam facere, natus omnis vel ab perspiciatis non enim distinctio vero blanditiis magnam optio! Similique molestias deserunt illo?`,
  },
  {
    icon: `fa-search-plus`,
    te: `Ethical Hacking`,
    ds: `Adipisci asperiores, magnam fuga vero nemo eaque rem repellendus modi aut ut cumque molestiae assumenda, officiis optio blanditiis maxime perspiciatis? Minima atque aspernatur molestiae sit harum necessitatibus ut, quidem ratione.`,
  }
]


const arrB = [
  {
    te: 'Get to Know Us',
    li: [
      'About Us',
      'Careers',
      'Press Releases',
      'Amazon Science'
    ]
  },
  {
    te: 'Connect with Us',
    li: [
      'Facebook',
      'Twitter',
      'Instagram',
    ]
  },
  {
    te: 'Make Money with Us',
    li: [
      'Sell on Amazon',
      'Sell under Amazon Accelerator',
      'Protect and Build Your Brand',
      'Amazon Global Selling',
      'Become an Affiliate',
      'Fulfilment by Amazon',
      'Advertise Your Products',
      'Amazon Pay on Merchants',
    ]
  },
  {
    te: 'Let Us Help You',
    li: [
      'COVID - 19 and Amazon',
      'Your Account',
      'Returns Centre',
      'Recalls and Product Safety Alerts',
      '100 % Purchase Protection',
      'Amazon App Download',
      'Help',
    ]
  },
]

export default function App() {
  return (
    <>
      <div className="container-fluid sec1">
        <div className="row r1">
          <div className="col-lg-6 c1">
            <i class="fa fa-envelope" aria-hidden="true"></i>
            <span>info@example.com</span>
            <i class="fa fa-phone" aria-hidden="true"></i>
            <span>123 456-7890</span>
          </div>
          <div className="col-lg-6">
            <div className="c3">
              <div className="icons">
                <i class="fa fa-facebook" aria-hidden="true"></i>
              </div>
              <div className="icons">
                <i class="fa fa-twitter" aria-hidden="true"></i>
              </div>
              <div className="icons">
                <i class="fa fa-instagram" aria-hidden="true"></i>
              </div>
              <div className="icons">
                <i class="fa fa-pinterest" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="row r2">
          <div className="col-lg-6 c4">
            Prixima<span>.</span>
          </div>
          <div className="col-lg-6 c5">
            <button>HOME</button>
            <button>ABOUT</button>
            <button>Services</button>
            <button>Portfolio</button>
            <button>Team</button>
            <button>Reviews</button>
            <button>Blog</button>
            <button>Contact</button>

          </div>
        </div>

        <div className="row r3">
          <div className="img">
            <button className='prev'>PREV</button>
            <div className='text1'>WE CRAFT DIGITAL EXPERIANCES</div>
            <div className="text2">DESIGN DRIVEN FOR PROFESSIONALS</div>
            <button className='gs'>GET STARTED</button>
            <button className='ow'>OUR WORK</button>
            <button className='next'>NEXT</button>
          </div>
        </div>

        <div className=" row r4">

          <div className="col-lg-6">
            <div className='myflex'>
              <div className="icons1  ic1">
                <i class="fa fa-search  " aria-hidden="true"></i>
              </div>
              <div>
                <div className="dm">
                  Digital Marketing
                </div>
                <div className="txt1">
                  It is a long established fact that a reader will be
                  distracted by the readable content of a page
                </div>
              </div>
            </div>

            <div className='myflex'>
              <div className="icons1 ic2">
                <i class="fa fa-camera " aria-hidden="true"></i>
              </div>
              <div>
                <div className="dm">
                  E-mail Marketing
                </div>
                <div className="txt1">
                  It is a long established fact that a reader will be
                  distracted by the readable content of a page
                </div>
              </div>
            </div>

            <div className='myflex'>
              <div className="icons1 ic3">
                <i class="fa fa-microphone " aria-hidden="true"></i>
              </div>
              <div>
                <div className="dm">
                  Business Marketing
                </div>
                <div className="txt1">
                  It is a long established fact that a reader will be
                  distracted by the readable content of a page
                </div>
              </div>
            </div>
          </div>


          <div className="col-lg-6 ">
            <div className="photo"></div>
          </div>

        </div>

        <div className="r5">
          <div className="row">
            <div className="col-lg">
              <div className="numbers">
                90K +
              </div>
              <div className="txt3">
                Happy Clients
              </div>
            </div>
            <div className="col-lg">
              <div className="numbers">
                45 M
              </div>
              <div className="txt3">
                Lines of code
              </div>
            </div>
            <div className="col-lg">
              <div className="numbers">
                190
              </div>
              <div className="txt3">
                Total Downloads
              </div>
            </div>
            <div className="col-lg">
              <div className="numbers">
                380K
              </div>
              <div className="txt3">
                Youtube Subscribers
              </div>
            </div>
          </div>
        </div>

        <div className="row r6">
          <div className="col-lg-12 txt4">
            OUR SERVICES
          </div>
          <div className="col-lg-12 txt5">
            WHAT WE DO ?
          </div>
          <div className="col-lg-12 mb-5">
            <div className="w-50 m-auto text-center">
              Contrary to popular belief. lorem ipsum is not a simply random text.It has
              roots in a piece of classical latin literature from 45 BC, making it over
              2000 years old
            </div>
          </div>



          {
            arrA.map((obj, index) => {
              return <div key={index} className="col-lg-4">
                <div className="box1">
                  <div className="icon1">
                    <i class={`fa ${obj.icon}`} aria-hidden="true"></i>
                  </div>
                  <div className="heading">
                    {obj.te}
                  </div>
                  <div className="text3">
                    {obj.ds}
                  </div>
                </div>
              </div>
            })
          }

        </div>

        <div className="row r7">
          <div className="col-lg-12">
            <div className="txt1">
              WORK
            </div>
          </div>
          <div className="col-lg-12">
            <div className="txt2">
              Successful projects
            </div>
          </div>
          <div className="col-lg-12">
            <div className="txt3">
              Contrary to popular belief. lorem ipsum is not a simply random text.It has
              roots in a piece of classical latin literature from 45 BC, making it over
              2000 years old
            </div>
          </div>
          <div className="col-lg-3 cc">
            <div className="img1 ">
              <div className="imgcc">
                <div className="consult">
                  <div>Consulting Marketing</div>

                  <div className='wd'><div className='line'></div>  Website Design</div>
                </div>
              </div>


            </div>
          </div>
          <div className="col-lg-6 cc">
            <div className="img2">
              <div className="imgcc">
                <div className="consult">
                  <div>Consulting Marketing</div>
                  <div className='wd'><div className='line'></div>  Website Design</div>
                </div>
              </div>

            </div>
          </div>
          <div className="col-lg-3 cc">
            <div className="img3 ">
              <div className="imgcc">
                <div className="consult">
                  <div>Consulting Marketing</div>

                  <div className='wd'><div className='line'></div>  Website Design</div>
                </div>
              </div>

            </div>
          </div>

          <div className="col-lg-12">
            <div className='dots'>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>

        <div className="row r8">
          <div className="col-lg-12 txt1">
            TEAM
          </div>
          <div className="col-lg-12 txt2">
            Team Members
          </div>
          <div className="col-lg-12 txt3">
            Contrary to popular belief. lorem ipsum is not a simply random text.It has
            roots in a piece of classical latin literature from 45 BC, making it over
            2000 years old
          </div>

          <div className="col-lg-4">
            <div className="img1">
              <div className="imgc"></div>
            </div>
            <div className="txt4">
              Marvin McKinney
            </div>
            <div className="post">
              Marketing Coordinator
            </div>
          </div>
          <div className="col-lg-4">
            <div className="img2">
              <div className="imgc"></div>
            </div>
            <div className="txt4">
              Kathryn Murphy
            </div>
            <div className="post">
              Ethical Hacker
            </div>
          </div>
          <div className="col-lg-4">
            <div className="img3">
              <div className="imgc"></div>
            </div>
            <div className="txt4">
              Darrell Steward
            </div>
            <div className="post">
              Software Developer
            </div>
          </div>
        </div>

        <div className="r9">
          <div className="row">
            <div className="col-lg-12 cc1">
              <div>
                <div className="pic">
                </div>
                <div className="txt5">
                  Ralph Edwards
                </div>
                <div className="post">
                  Market Development Manager
                </div>
                <div className="txt6">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur nostrum cum molestias perspiciatis officiis in odio. Nostrum eveniet molestias illum magnam sapiente? Cupiditate cum sed dolor architecto magnam nulla. Architecto.
                </div>
                <div className="star">
                  <div className="ico">
                    <i class="fa fa-star" aria-hidden="true"></i>
                  </div>
                  <div className="ico">
                    <i class="fa fa-star" aria-hidden="true"></i>
                  </div>
                  <div className="ico">
                    <i class="fa fa-star" aria-hidden="true"></i>
                  </div>
                  <div className="ico">
                    <i class="fa fa-star" aria-hidden="true"></i>
                  </div>
                  <div className="ico">
                    <i class="fa fa-star-half-empty" aria-hidden="true"></i>
                  </div>
                </div>
                <div className="dot">
                  <div className="icon">
                    <i class="fa fa-circle" aria-hidden="true"></i>
                  </div>
                  <div className="icon">
                    <i class="fa fa-circle" aria-hidden="true"></i>
                  </div>
                  <div className="icon">
                    <i class="fa fa-circle" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row r10">
          <div className="col-lg-12 txt1">
            BLOG
          </div>
          <div className="col-lg-12 txt2">
            Blog Posts
          </div>
          <div className="col-lg-12 mb-5">
            <div className="w-50 m-auto text-center ">
              Contrary to popular belief. lorem ipsum is not a simply random text.It has
              roots in a piece of classical latin literature from 45 BC, making it over
              2000 years old
            </div>
          </div>

          <div className="col-lg-4">
            <div className='box'>
              <div className="img1"></div>
              <div className="txt1">Web Design</div>

              <div className="boxa">
                <div className="txt2">01 DEC, 2022</div>
                <div className="txt3">Web Design trends on 2022</div>
                <div className="txt4">
                  Contrary to popular belief. lorem ipsum is not a simply random text.It has roots in a piece of classical latin literature from 45 BC, making it over 2000 years old
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className='box'>
              <div className="img2"></div>
              <div className="txt1">Programming</div>

              <div className="boxa">
                <div className="txt2">01 DEC, 2022</div>
                <div className="txt3">Web Design trends on 2022</div>
                <div className="txt4">
                  Contrary to popular belief. lorem ipsum is not a simply random text.It has roots in a piece of classical latin literature from 45 BC, making it over 2000 years old
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className='box'>
              <div className="img3"></div>
              <div className="txt1">Marketing</div>

              <div className="boxa">
                <div className="txt2">01 DEC, 2022</div>
                <div className="txt3">Web Design trends on 2022</div>
                <div className="txt4">
                  Contrary to popular belief. lorem ipsum is not a simply random text.It has roots in a piece of classical latin literature from 45 BC, making it over 2000 years old
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="r11">
          <div className="row">
            <div className="col-lg-12 txt1">
              Prixima <span>.</span>
            </div>
            <div className="col-lg-12 txt2">
              Contrary to popular belief. lorem ipsum is not a simply random text.It has roots in a piece of classical latin literature from 45 BC, making it over 2000 years old
            </div>
            <div className="col-lg-12">
              <div className="icon">
                <i class="fa fa-facebook" aria-hidden="true"></i>
              </div>
              <div className="icon">
                <i class="fa fa-twitter" aria-hidden="true"></i>
              </div>
              <div className="icon">
                <i class="fa fa-instagram" aria-hidden="true"></i>
              </div>
              <div className="icon">
                <i class="fa fa-pinterest" aria-hidden="true"></i>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="text">
                privacy
              </div>
              <div className="text">
                terms
              </div>
              <div className="text">
                disclaimer
              </div>
            </div>
            <div className="line"></div>
          </div>
        </div>
      </div>




    </>
  )
}
