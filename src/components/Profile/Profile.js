import React from "react";
import classes from "./Profile.module.scss";
import Header from "../Header/Header";
import { Scrollbars } from "react-custom-scrollbars";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Profile = () => {
  return (
    <Scrollbars autoHide autoHeightMin={`calc(100vh - 120px)`}>
      <a href="#top" className={classes.stickyDefault}>
        <div className={classes.stickyButton}>
          <FontAwesomeIcon icon={faArrowUp} />
        </div>
      </a>
      <a href="#top-mobile" className={classes.stickyMobile}>
        <div className={classes.stickyButton}>
          <FontAwesomeIcon icon={faArrowUp} />
        </div>
      </a>
      <a name="top-mobile" />
      <Header />
      <a name="top" />
      <article className={classes.appProfile}>
        <div className={classes.appProfileContent}>
          Spicy jalapeno bacon ipsum dolor amet kevin ipsum cow, culpa pork in
          ad adipisicing voluptate venison. Bresaola corned beef tempor pork
          loin est buffalo, duis filet mignon ball tip sed porchetta ham.
          Capicola enim dolor, lorem in elit nostrud. Strip steak nulla elit,
          nisi hamburger shankle velit labore cillum consequat commodo. Duis
          prosciutto beef ribs sed voluptate adipisicing porchetta in dolore
          turkey eu alcatra. Pork belly deserunt irure swine minim est fugiat.
          Dolor veniam biltong bresaola, ut kielbasa exercitation consequat esse
          pork loin.
          <br />
          <br />
          Officia tenderloin shankle tempor non rump mollit adipisicing dolore
          sed biltong dolor ipsum bacon. Chicken kevin pork chop, occaecat quis
          et anim voluptate ribeye nisi sunt. Buffalo strip steak fatback
          prosciutto swine. Hamburger in turducken proident ipsum venison
          burgdoggen exercitation spare ribs chuck bresaola bacon qui short loin
          irure. Shankle alcatra ea ad ham landjaeger in, irure pork loin
          consequat jerky beef ribs. Proident ribeye boudin, swine id shoulder
          doner.
          <br />
          <br />
          Culpa in fatback duis nostrud turkey biltong aute tenderloin pariatur
          esse short loin ut ham. Sausage picanha ball tip quis minim. Aliquip
          buffalo turkey cillum enim ea filet mignon dolore rump pork belly nisi
          boudin pork loin fatback anim. Spare ribs deserunt commodo shank,
          swine dolore anim pancetta. Jerky laboris frankfurter, duis aliquip
          capicola short loin pork t-bone consectetur ullamco kielbasa.
          <br />
          <br />
          In esse labore laborum burgdoggen excepteur pariatur kielbasa tempor
          occaecat strip steak magna. Ad brisket spare ribs meatball quis.
          Ground round bacon ut non, velit beef officia corned beef ball tip et
          hamburger. Pork loin tri-tip consectetur short ribs, flank in
          voluptate duis aute ut porchetta rump. Leberkas ball tip jowl
          drumstick reprehenderit non pig porchetta bresaola commodo et
          tenderloin dolore fugiat beef ribs. Consequat ham hock shank sausage,
          est pork chop turkey mollit ad anim swine sirloin id enim. Porchetta
          nisi short ribs, turducken mollit cow voluptate andouille buffalo
          proident do magna pork loin shankle.
          <br />
          <br />
          Elit leberkas est exercitation non esse capicola meatball eu. Magna
          beef laboris consequat dolore fatback pig irure est burgdoggen corned
          beef. Aute velit picanha prosciutto sirloin. Dolore ut ham hock in.
          Shankle eiusmod kielbasa tri-tip tenderloin deserunt ham qui. Quis do
          corned beef deserunt dolor t-bone et fugiat brisket est landjaeger
          buffalo alcatra pariatur ut. Short ribs buffalo strip steak leberkas.
          Do ut ham id sunt. Ullamco officia meatball brisket, cupim shoulder
          andouille veniam labore minim. Fugiat ullamco cupidatat et. Sunt filet
          mignon swine short ribs dolore picanha turkey boudin jerky t-bone.
          Occaecat nisi beef, est landjaeger ut pancetta flank.
          <br />
          <br />
          Sunt burgdoggen meatloaf, exercitation turkey leberkas labore short
          loin reprehenderit sint dolore. Ut biltong voluptate aliquip tri-tip
          non bacon aute. Nostrud proident ex, pork loin kielbasa pork belly
          ullamco pancetta strip steak doner shank meatloaf rump sausage. Doner
          est fatback, consequat dolore prosciutto filet mignon id. Occaecat
          mollit nulla, sirloin irure ut non eiusmod pork loin jowl bresaola.
          Lorem ribeye cupim mollit ball tip, voluptate jerky adipisicing
          alcatra. Turkey biltong prosciutto, tri-tip exercitation ball tip ex.
          Swine tempor anim laboris labore enim, ut deserunt salami cupidatat.
          Non eiusmod ullamco corned beef consequat, meatloaf aute buffalo
          fatback id ut.
          <br />
          <br />
          Proident ut rump, esse leberkas ham id. Turducken irure dolore nulla.
          Tail rump chicken strip steak, frankfurter sausage tempor tongue dolor
          esse. Consectetur brisket picanha, sint ut pancetta esse tenderloin
          landjaeger reprehenderit ut id minim. Venison dolor ut sunt beef ribs
          proident, veniam est kielbasa picanha pork belly. In pig nostrud, pork
          chop pork loin officia tempor ut. Ball tip venison velit ea chicken.
          Does your lorem ipsum text long for something a little meatier? Give
          our generator a try… it’s tasty!
          <br />
          <br />
          Spicy jalapeno bacon ipsum dolor amet kevin ipsum cow, culpa pork in
          ad adipisicing voluptate venison. Bresaola corned beef tempor pork
          loin est buffalo, duis filet mignon ball tip sed porchetta ham.
          Capicola enim dolor, lorem in elit nostrud. Strip steak nulla elit,
          nisi hamburger shankle velit labore cillum consequat commodo. Duis
          prosciutto beef ribs sed voluptate adipisicing porchetta in dolore
          turkey eu alcatra. Pork belly deserunt irure swine minim est fugiat.
          Dolor veniam biltong bresaola, ut kielbasa exercitation consequat esse
          pork loin.
          <br />
          <br />
          Officia tenderloin shankle tempor non rump mollit adipisicing dolore
          sed biltong dolor ipsum bacon. Chicken kevin pork chop, occaecat quis
          et anim voluptate ribeye nisi sunt. Buffalo strip steak fatback
          prosciutto swine. Hamburger in turducken proident ipsum venison
          burgdoggen exercitation spare ribs chuck bresaola bacon qui short loin
          irure. Shankle alcatra ea ad ham landjaeger in, irure pork loin
          consequat jerky beef ribs. Proident ribeye boudin, swine id shoulder
          doner.
          <br />
          <br />
          Culpa in fatback duis nostrud turkey biltong aute tenderloin pariatur
          esse short loin ut ham. Sausage picanha ball tip quis minim. Aliquip
          buffalo turkey cillum enim ea filet mignon dolore rump pork belly nisi
          boudin pork loin fatback anim. Spare ribs deserunt commodo shank,
          swine dolore anim pancetta. Jerky laboris frankfurter, duis aliquip
          capicola short loin pork t-bone consectetur ullamco kielbasa.
          <br />
          <br />
          In esse labore laborum burgdoggen excepteur pariatur kielbasa tempor
          occaecat strip steak magna. Ad brisket spare ribs meatball quis.
          Ground round bacon ut non, velit beef officia corned beef ball tip et
          hamburger. Pork loin tri-tip consectetur short ribs, flank in
          voluptate duis aute ut porchetta rump. Leberkas ball tip jowl
          drumstick reprehenderit non pig porchetta bresaola commodo et
          tenderloin dolore fugiat beef ribs. Consequat ham hock shank sausage,
          est pork chop turkey mollit ad anim swine sirloin id enim. Porchetta
          nisi short ribs, turducken mollit cow voluptate andouille buffalo
          proident do magna pork loin shankle.
          <br />
          <br />
          Elit leberkas est exercitation non esse capicola meatball eu. Magna
          beef laboris consequat dolore fatback pig irure est burgdoggen corned
          beef. Aute velit picanha prosciutto sirloin. Dolore ut ham hock in.
          Shankle eiusmod kielbasa tri-tip tenderloin deserunt ham qui. Quis do
          corned beef deserunt dolor t-bone et fugiat brisket est landjaeger
          buffalo alcatra pariatur ut. Short ribs buffalo strip steak leberkas.
          Do ut ham id sunt. Ullamco officia meatball brisket, cupim shoulder
          andouille veniam labore minim. Fugiat ullamco cupidatat et. Sunt filet
          mignon swine short ribs dolore picanha turkey boudin jerky t-bone.
          Occaecat nisi beef, est landjaeger ut pancetta flank.
          <br />
          <br />
          Sunt burgdoggen meatloaf, exercitation turkey leberkas labore short
          loin reprehenderit sint dolore. Ut biltong voluptate aliquip tri-tip
          non bacon aute. Nostrud proident ex, pork loin kielbasa pork belly
          ullamco pancetta strip steak doner shank meatloaf rump sausage. Doner
          est fatback, consequat dolore prosciutto filet mignon id. Occaecat
          mollit nulla, sirloin irure ut non eiusmod pork loin jowl bresaola.
          Lorem ribeye cupim mollit ball tip, voluptate jerky adipisicing
          alcatra. Turkey biltong prosciutto, tri-tip exercitation ball tip ex.
          Swine tempor anim laboris labore enim, ut deserunt salami cupidatat.
          Non eiusmod ullamco corned beef consequat, meatloaf aute buffalo
          fatback id ut.
          <br />
          <br />
          Proident ut rump, esse leberkas ham id. Turducken irure dolore nulla.
          Tail rump chicken strip steak, frankfurter sausage tempor tongue dolor
          esse. Consectetur brisket picanha, sint ut pancetta esse tenderloin
          landjaeger reprehenderit ut id minim. Venison dolor ut sunt beef ribs
          proident, veniam est kielbasa picanha pork belly. In pig nostrud, pork
          chop pork loin officia tempor ut. Ball tip venison velit ea chicken.
          Does your lorem ipsum text long for something a little meatier? Give
          our generator a try… it’s tasty!
        </div>
      </article>
    </Scrollbars>
  );
};

export default Profile;
