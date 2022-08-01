import './App.css';
import { Component, Fragment } from 'react';
import Color_Swicher from "./Components/Color_Swicher/Color_Swicher";
import Intro from "./Components/Intro/Intro";
import Nav from './Components/Nav/Nav';
import About from './Components/About/About';
import Seasons from './Components/Seasons/Seasons';
import Quote from './Components/Quote/Quote';
import Warriors from './Components/Warriors/Warriors';
import Subscribe from './Components/Subscribe/Subscribe';
import Footer from './Components/Footer/Footer';

class App extends Component {
  state = {
    lang:"en",
    words : {
      intro: [
        {
          span: {
            en: "THE STORY ABOUT",
            ar: "القصة حول",
          },
        },
        {
          h1: {
            en: "THE RESURRECTION OF A NATION",
            ar: "قيامة أُمة",
          },
        },
        {
          p: {
            en: " Welcome to the Kayi tribe! 'Resurrection: Ertugrul' is a Turkish period drama that tells the story of the famous 13th-century warrior Ertugrul Bey, the father of Osman Gazi who would go on to establish the Ottoman Empire.",
            ar: "مرحباً بكم في قبيلة الكايي! مسلسل 'قيامة أرطغرل' هو عرض درامي تركي لفترة تاريخية، يروي قصة المحارب الشهير أرطغرل بك الذي عاش في القرن الثالث عشر، والد عثمان بك مؤسس الإمبراطورية العثمانية.",
          },
        },
      ],
      nav: [
        {
          img:{
            en :"../../images/intro/logo-en.png",
            ar : "../../images/intro/logo-ar.png",
          },
        },
        {
          li:[
            {
              en:"About",
              ar:"من نحن",
            },
            {
              en:"Seasons",
              ar:"المواسم",
            },
            {
              en:"Quote",
              ar:"اقتباس",
            },
            {
              en:"Warriors",
              ar:"المحاربين",
            },
            {
              en:"Subscribe",
              ar:"إشتراك",
            },
          ],
        }
      ],
      about_info:[
        {
          span:{
            en:`THE STORY OF THE<h2>KAYI TRIBE</h2>`,
            ar:`قصة  <h2>قبيلة الكايي </h2> `
          },
          p:{
            en:`  Set in Anatolia (modern-day Turkey), the nomadic Kayi tribe of the
            Oghuz Turks are on a quest to find a place they can finally call home.
            Ertugrul, the leader of the tribe, leads his people through
            perseverance against hardship while striving for justice and
            maintaining the traditions of the land. By battling his enemies with
            strength and bravery, Ertugrul consequently plants the seed that would
            lead to the founding of the Ottoman Empire, which spread across three
            continents and ruled for six centuries.`,
            ar:`على أراضي الأناضول (تركيا حديثاً)، تسعى قبيلة الكايي من أتراك الأغوز إلى إيجاد موطن لها ينهي آلامها وتنقلاتها المستمرة. يقود أرطغرل القبيلة في سبيل ذلك متحدياً الصعاب وساعياً لتحقيق العدالة والحفاظ على على تقاليد قبيلته. بعد الانتصار على أعدائه بقوة وشجاعة، يزرع أرطغرل البذور التي ستؤدي إلى نشأة الإمبراطورية العثمانية التي امتدت عبر ثلاث قارات وحكمت لستة قرون.
            `,
          }
        }
      ],
      season_info:[
        {
          h2:{
            en:"Season 1",
            ar:"الموسم الأول",
          },
          p:{
            en:` Ertugrul and his friends encounter the Knights Templar on a hunt.
            After rescuing three Seljuk prisoners, they return to the Kayi
            tribe. But the new arrivals cause problems for the tribe's leader
            Suleyman Shah. He dispatches Ertugrul on a mission to find new land
            and seek an agreement with the Sultan in Aleppo.`,
            ar:`بينما كان أرطغرل في إحدى جولات الصيد مع جنوده، قام بإنقاذ حليمة سلطان، ووالدها، وأخاها من فرسان المعبد، وأحضرهم إلى مقر قبيلة الكايي، ما تسبب في استشاطة فرسان المعبد غضباً على زعيم القبيلة سليمان شاه والذي قرر بعدها إرسال ابنه أرطغرل إلى حلب في مهمة للبحث عن موطن جديد للقبيلة`,
          }
        },
        {
          h2:{
            en:"Season 2",
            ar:"الموسم الثاني",
          },
          p:{
            en:`Ertugrul is captured by the Mongols. After escaping, his return to
            the tribe creates internal strife with his cousin Tugtekin.
            Meanwhile, Ertugrul's long-lost brother appears. The Kayi tribe
            splits as Ertugrul and a group journey to West Anatolia, leaving the
            rest of the tribe.`,
            ar:`بعد عناء طويل، يستطيع أرطغرل أن يفلت من أيدي المغول، لكن عودته إلى القبيلة سببت صراعاً مع ابن خاله توتكين. في هذه الأثناء، يظهر الأخ الأكبر لأرطغرل بعد غياب طويل. ويقرر أرطغرل أن ينتقل إلى غرب الأناضول مع من يتفق مع قراره من القبيلة`,
          }
        },
        {
          h2:{
            en:"Season 3",
            ar:"الموسم الثالث",
          },
          p:{
            en:` The Cavdar tribe, the most powerful in western Anatolia, deal with
            Ertugrul's arrival. Deceit and manipulation manifest and a
            leadership struggle ensues. To strengthen ties, Turgut Alp marries
            Aslihan from the Cavdar. But danger lurks as Emir Sadettin Kopek
            plots a trap for Ertugrul.`,
            ar:`قبيلة تشافدار، أقوى قبيلة في غرب الأناضول والتي توجب على أرطغرل أن يتعامل معها بعد وصوله تلك الأراضي، حيث كانت الأجواء مليئة بالخداع والتلاعب والصراع على القيادة. في هذه الأثناء، يتزوج تورغوت من ألب أصلان من قبيلة تشافدار لتقوية العلاقة بين القبيلتين، إلا أن سعد الدين كوبيك ينصب فخاً خطيراً لأرطغرل`,
          }
        },
        {
          h2:{
            en:"Season 4",
            ar:"الموسم الرابع",
          },
          p:{
            en:`  As the Kayi tribe mourn Ertugrul's suspected death, Dundar becomes
            the bey. But Ertugrul returns, banishes Dundar and declares war on
            the Byzantines. The Sultan is poisoned by Kopek and dies in
            Ertugrul's hands. In a final showdown, Ertugrul fights Kopek and
            Osman's birth is a bittersweet occasion.`,
            ar:`بعد وفاة أرطغرل، يتولى أخوه دوندار سيادة القبيلة، ولكن أرطغرل يفاجئ الجميع بعودته ويعلن الحرب ضد الصليبيين. ينصب سعد الدين كوبيك فخاً خطيراً لأرطغرل ويقوم بتسميم السلطان ليموت بين يدي أرطغرل ليلقي اللوم عليه. عندها يحتدم الصراع مع سعد الدين وتأتي ولادة عثمان حدثاً جميلاً ترافقه مرارة الأحداث الأخرى`,
          }
        },
        {
          h2:{
            en:"Season 5",
            ar:"الموسم الخامس",
          },
          p:{
            en:`  Ten years after the Battle of Kosedag, the Mongols control the
            Seljuk state. A spy is sent to gain information on Ertugrul's
            rebellious plans but falls in love with him. Meanwhile, an assassin
            works with the Mongols to wipe out the Oguz tribes.`,
            ar:`بعد فتوحات كبيرة رافقها سنوات من الصراع، يستقر أرطغرل وقبيلته في سغوت، ويؤسس فيها نظاماً مبنياً على الأمان والثقة. إلا أن والد إلبيلغي خاتون يقوم بإرسال ابنته خاتون لتقوم بالتجسس على أرطغرل، لكنها تقع في غرامه.`,
          }
        },
      ],
      quote_content:[
        {
          p:{
            en:`To those who say our power is not enough, we will say our faith is enough. To those who say our lifespan is not enough, we will say our history is enough. To those who say that the universe is not enough, we say God is enough for us.
            `,
            ar:`سنقول للمشككين في قوتنا، أن إيماننا كافٍ. وسنقول للمشككين في بقائنا على قيد الحياة لحين تنفيذ أهدافنا، أن تاريخنا كاف. سنقول للمشككين في الكون، أن وجود الله يكفينا.`,
          },
          span:{
            en:"Ertugrul Gazi",
            ar:"الغازي أرطغرل",
          },
        }
      ],
      subscribe_content:[
        {
          span:{
            en:"SUBSCRIBE TO THE TRIBE!",
            ar:"اشترك في القبيلة!",
          },
          p:{
            en:`You’ll receive the latest updates from TRT.
            <br>
            THE EMAIL FIELD IS REQUIRED.
            `,
            ar:`TRT ستحصل على آخر الأخبار من 
            <br>
            أدخل بريدك الإلكتروني واشترك بالنشرة البريدية`,
          },
          placeholder:{
            en:`Your Email`,
            ar:`بريدك الإلكتروني`,
          }
        }
      ],
      footer:[
        {
          span:{
            en:`FOLLOW Us`,
            ar:`تابعنا`,
          },
          rights:{
            en:`<strong>coded by : </strong>  <a href="https://a-mohammed2001.github.io/My-Cv/" target="blank">Ahmed Abou Khatwa</a>`,
            ar:`<strong>بواسطه : </strong>  <a href="https://a-mohammed2001.github.io/My-Cv/" target="blank">أحمد أبو خطوه</a>`,
          }
        }
      ],
    },
    warriors_info : [
      {
        id: 0,
        name:{en:" ERTUGRUL BEY",ar:"أرطغرل"} ,
        img: "images/warriors/ERTUGRUL BEY.jpg",
        info:{
          en:"The son of Suleyman Shah, Ertugrul is a brave warrior who fights for his dreams and ideals. He is the protector of the oppressed, willing to sacrifice his life for the cause of justice.",
          ar:"أرطغرل بن سليمان شاه، محارب شجاع يقاتل في سبيل تحقيق أحلامه ومعتقداته. يكرِّس حياته لنصرة المظلوم، ويأبى أن يحني رأسه للظالم، ويسعى دائماً وفي كل شيء إلى تحقيق العدالة مهما كان ثمنها.",
        } 
      },
      {
        id: 1,
        name:{en:"TURGUT",ar:"تورغوت ألب"} ,
        img: "images/warriors/TURGUT.jpg",
        info:{
          en: "A fearsome axe-wielding warrior, Turgut is one of the most skilled alps of the Kayi tribe. Although his loyalty is put to the test, he remains a close friend and confidant of Ertugrul.",
          ar:"تورغوت ألب، من أفضل المحاربين الثلاثة المقربين من أرطغرل. مقاتل تثق القبيلة في إخلاصه ومهاراته. بارع في القتال باستخدام فأسه الذي يرهب أعدائه",
        } 
      },
      {
        id: 2,
        name:{en:"BAMSI",ar:"بامسي"} ,
        img: "images/warriors/BAMSI.jpg",
        info:{
          en:  "An indispensable alp of the Kayi tribe, Bamsi is a skilled soldier who can fight with double swords. Despite his fierce looks, he has a kind heart inside.",
          ar:"بامسي، محارب مقرَّب من أرطغرل وممن لا يمكن الاستغناء عنهم في القبيلة. مقاتل ماهر وبارع في القتال باستخدام سيفين معاً. وبالرغم من شراسة نظراته، إلا أنه يتمتع بقلب رحيم وروح تتحلى بحس الفكاهة",
        } 
      },
      {
        id: 3,
        name:{en:"GUNDOGDU",ar:"غندوغدو"} ,
        img: "images/warriors/GUNDOGDU.jpg",
        info:{
          en:  "The eldest son of Suleyman Shah, Gundogdu, aspires to be the leader of the Kayi tribe after his father. Patience is his most significant virtue, and his biggest weakness is to get influenced by the people he values.",
          ar:"غوندوغدو، الابن الأكبر لسليمان شاه، يطمح أن يصبح زعيماً لقبيلة الكايي بعد والده. وبالرغم من تحليه بالصبر، إلا أن نقطة ضعفه تكمن في سرعة تأثره بالناس حوله، وخصوصاً المقربين منهم",
        } 
      },
      {
        id: 4,      
        name:{en:"DOGAN",ar:"دوغان"} ,
        img: "images/warriors/DOGAN.jpg",
        info: {
          en:"One of Ertugrul's most trusted alps, Dogan is capable of coming up with a solution when faced with a challenging situation. He is expert tracker and also possesses a witty sense of humour.",
          ar:"دوغان، أحد أكثر المحاربين قرباً من أرطغرل. يتمتع بالقدرة على إيجاد الحلول السريعة عند مواجهة التحديات. خبير في التعقب ويتحلى بروح الدعابة والفكاهة",
        }
      },
      {
        id: 5,
        name:{en:"SULEYMAN SHAH",ar:"سليمان شاه"} ,
        img: "images/warriors/SULEYMAN SHAH.jpg",
        info: {
          en:"The leader of the Kayi tribe, Suleyman Shah, is a wise leader who represents the traditions of his people. He is a merciful father but is willing to take harsh measures for the good of his people and the sake of justice.",
          ar:"سليمان شاه، سيد قبيلة الكايي، وزعيم حكيم يمثل تقاليد قبيلته. أبٌ رحيم، ولكنه لا يتردد في اتخاذ القرارات أو العقوبات الصارمة التي تصب في مصلحة شعبه وفي سبيل تحقيق العدالة",
        }
      },
      {
        id: 6,
        name:{en:"DELI DEMIR",ar:"ديلي ديمير"} ,
        img: "images/warriors/DELI DEMIR.jpg",
        info: {
          en:"A skilled bladesmith, an expert storyteller, a caring father and a loyal friend, Deli Demir always stands by Ertugrul and his companions in their most difficult moments.",
          ar:"ديلي دمير، أحد أسياد قبيلة الكايي، وماهر في صناعة السيوف والدروع. مبارز بارع، يقف دائماً مع أرطغرل في قراراته، وخصوصاً في الأوقات الحرجة",
        }
      },
    ],
  }
  render(){
    return (
      <Fragment>
        <Color_Swicher/>
        <Intro/>
        <Nav words={this.state.words} warriors_info={this.state.warriors_info}/>
        <About/>
        <Seasons/>
        <Quote/>
        <Warriors words={this.state.words} warriors_info={this.state.warriors_info} lang={this.state.lang}/>
        <Subscribe/>
        <Footer/>
      </Fragment>
    );
  }
 
}

export default App;
