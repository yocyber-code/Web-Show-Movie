$(document).ready(function () {
    $(".movie").hide().fadeIn("slow");

    var movie_datas =
        [
            {
                movie_name: "Avenger Endgame",
                poster: "https://scontent.fbkk9-3.fna.fbcdn.net/v/t1.6435-9/53657238_2167345493360347_4296291808079511552_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=973b4a&_nc_ohc=J-Qfdd39XMYAX8kJw4z&_nc_ht=scontent.fbkk9-3.fna&oh=00_AT9qsuuDthhvMUcSSOo19zD5y3MR4i1qSEfk0NF3Vo7ICQ&oe=62BF6F52",
                description: "ในปี 2018 ยี่สิบสามวันหลังจากธานอสสังหารครึ่งหนึ่งของชีวิตทั้งหมดในจักรวาล แครอลแดนเวอร์สช่วยชีวิตโทนี่ สตาร์คและเนบิวลาจากห้วงอวกาศและพวกเขาก็กลับมารวมตัวกับอเวนเจอร์สที่เหลือ บรูซ แบนเนอร์ , สตีฟ โรเจอร์ส , ธอร์ , นาตาชา โรมานอฟและเจมส์ โรดส์และจรวดบนโลกการค้นหาธานอสบนดาวเคราะห์ที่ไม่มีคนอาศัยอยู่พวกเขาวางแผนที่จะใช้อินฟินิตี้สโตนเพื่อย้อนกลับการกระทำของเขาแต่พบว่าธานอสได้ทำลายพวกมันไปแล้วเพื่อป้องกันการใช้งานต่อไป",
                youtubeid: "TcMBFSGVi1c"
            },
            {
                movie_name: "The Batman",
                poster: "https://f.ptcdn.info/549/076/000/r86d1f3ibpOkY73LdOGq-o.jpg",
                description: "ในช่วง 2 ปีแห่งการย่องเดินตามท้องถนนในร่างแบทแมน เอาชนะความกลัวและเข้าไปพัวพันกับอาชญากรรมทั้งหลาย จนบรูซ เวย์นถลำตัวเข้าสู่เงามืดแห่งก็อตแธม ซิตี้ โดยมีสหายที่วางใจได้เพียงไม่กี่คนอย่าง อัลเฟรด เพนนีเวิร์ธ หรือ เจมส์ กอร์ดอน ท่ามกลางกลุ่มผู้ทุจริตที่เลื่องชื่อของเมือง ศาลเตี้ยผู้โดดเดี่ยวต้องออกโรงแก้แค้นเพียงลำพังท่ามกลางประชาชนที่อยู่เคียงข้างเขา เมื่อฆาตกรได้เล็งเป้าหมายเป็นกลุ่มคนระดับแนวหน้าของก็อตแธม โดยมีการวางแผนร้ายอย่างต่อเนื่อง",
                youtubeid: "s6ttqUweInc"
            },
            {
                movie_name: "Spider-Man: No Way Home",
                poster: "https://s.isanook.com/mv/0/rp/r/w728/ya0xa0m1w0/aHR0cHM6Ly9zLmlzYW5vb2suY29tL212LzAvdWQvMjMvMTE4NTg5L3Nhbm9va19pbWctMzA2Ni5qcGc=.jpg",
                description: "Spider-Man: No Way Home ได้เล่าเรื่องราวต่อเนื่องจากเหตุการณ์ในภาคก่อน ปีเตอร์ พาร์คเกอร์ และคนรอบๆ ตัวเขาได้ตกที่นั่งลำบาก เนื่องจาก มิสเทอริโอ ได้ทิ้งบอมบ์ชุดใหญ่เอาไว้ ด้วยการเปิดเผยตัวตนที่แท้ของเขาว่าเป็นใคร ทำให้เขาต้องโร่ไปหา ด็อกเตอร์ สเตรนจ์ เพื่อช่วยแก้ไขสิ่งที่เกิดขึ้น โดยหวังว่าจะบลบความทรงจำคนทั้งโลก เพื่อให้ลืมว่าใครคือไอ้แมงมุมแต่สิ่งไม่คาดคิดได้เกิดขึ้นระหว่างการร่ายมนตร์คาถา เพราะเขาทำให้หมอเสียสมาธิ กลับกลายเป็นว่าผลลัพธ์ที่ออกมานั้นเป็นหายนะกว่าเดิม เพราะเป็นการกำเนิดมัลติเวิร์ส หรือ พหุจักรวาล โลกคู่ขนานต่างๆ ที่ทำให้เขาต้องเผชิญหน้ากับสถานการณ์และวายร้ายเก่าๆ ที่เคยต่อกรด้วยกันมา และทำให้ทุกอย่างแย่ลงและอันตรายเกินกว่าที่จะรับมือได้ด้วยตัวเอง",
                youtubeid: "4A6Z2GT9DJU"
            },
            {
                movie_name: "บั้งไฟสไลเดอร์",
                poster: "https://lh3.googleusercontent.com/NuCoiH2srFMQV1iHkFtklHabcYGhDstklfhib48ZFxGrV_aFnpdAxNlsKGynymF3CcczN6oPxxnvGoxC0EcPUPygYeyFUo650fA=w260",
                description: 'เรื่องราวสนุกสนานในงานบุญบั้งไฟ เมื่อ โม ( เก๋ไก๋ สไลเดอร์) เจ้าของฉายา โม จอมโปรเจค และ แก๊งนางฟ้า ( พี่ ๆ กะเทย 4 คน นำทีมโดย มาริโอ้ โจ๊ก) รวมตัวกับคนในหมู่บ้านซ้อมรำอย่างจริงจัง เพราะเป็นครั้งแรกของหมู่บ้านเล็กๆแห่งนี้ที่ได้เป็นตัวแทนของอำเภอไปประกวดรำในงานบุญบั้งไฟของจังหวัด...ซึ่งเป็นงานที่พวกเธอตั้งตารอมาทั้งชีวิต แต่เรื่องไม่คาดฝันก็เกิดขึ้น เมื่อ เซียนเทพ เซียนบั้งไฟชื่อดัง ใช้อำนาจขอร้องกึ่งบังคับให้นายอำเภอส่งขบวนรำของ ฟาง ลูกสาวตัวเองไปแข่งแทนหมู่บ้านของ โม	และกติกามีอยู่ว่า หนึ่งอำเภอสามารถส่งขบวนรำได้แค่ 1 ขบวน งานนี้หมู่บ้านเล็กๆของโมเลยต้องหลีกทางให้เซียนเทพ	เมื่อโดนตัดหน้าไปแบบไม่ทันตั้งตัวแบบนี้ โม เลยคิดว่าต้องทำอะไรสักอย่าง โปรเจคแก้เผ็ดเซียนเทพจึงผุดขึ้นมาในหัว โมจึงชวนพี่ ๆ แก๊งนางฟ้า “ทำบั้งไฟ” ไปแข่ง !!! "ใช้สิ่งที่ เซียนเทพรัก ไปเอาคืนเซียนเทพ เหมือนที่พวกเธอโดนแย่งงานรำ งานที่สำคัญที่สุดในชีวิตไปนั่งเอง "',
                youtubeid: "vVwS7b46IAY"
            },
            {
                movie_name: "Top Gun: Maverick",
                poster: "https://cms.dmpcdn.com/dara/2021/12/24/56d75740-64c9-11ec-94b0-f9d1ab71ac58_webp_original.jpg",
                description: "หลังจากรับราชการเป็นนักบินระดับท็อปของกองทัพเรือมานานกว่า 30 ปี พีท “มาเวอริค” มิทเชลล์ (ทอม ครูซ) กลับมาสู่ที่ซึ่งเหมาะสมกับเขา เขากลับมาเป็นนักบินทดสอบผู้กล้าหาญและหลีกหนีจากความก้าวหน้าทางการงาน เขากลับมาฝึกหน่วยท็อปกันเพื่อปฏิบัติภารกิจพิเศษในรูปแบบที่ยังไม่เคยมีนักบินที่ยังมีชีวิตอยู่เคยเห็นมาก่อน มาเวอริคต้องเผชิญหน้ากับเรือโทแบรดลีย์ แบรดชอว์ (ไมล์ เทลเลอร์) หรือ “รูสเตอร์” ลูกชายของเรือโทนิค แบรดชอว์ หรือ “กูส” เพื่อนของเขาที่เสียชีวิตไปแล้ว เขาต้องพบกับอนาคตที่ไม่แน่นอนและอดีตที่ตามหลอกหลอน มาเวอริคต้องเผชิญกับความกลัวที่ฝังลึกอยู่ และปฏิบัติภารกิจให้สำเร็จ ซึ่งภารกิจนี้ผู้ที่ได้รับเลือกให้ร่วมบินต้องเสียสละอย่างที่สุด",
                youtubeid: "7ZCOpMpLEn4"
            },
            {
                movie_name: "แหยม ยโสธร",
                poster: "https://newupdatesport.files.wordpress.com/2020/10/keyword1-min-11.jpg",
                description: "เรื่องราวความรักที่สุดแสนจะใสซื่ออบริสุทธิ์ของคนหนุ่มคนสาวบ้านไร่แดนอีสาน โดยผ่านมุมมองของ “เพ็ชรทาย วงษ์คำเหลา” หรือที่รู้จักกันในชื่อ “หม่ำ จ๊กม๊ก” ตลกชื่อดังที่ฝากผลงานให้สะท้านกันมาแล้วทั่วหน้าจาก “บอดี้การ์ดหน้าเหลี่ยม” (2547) และคราวนี้กลับมาอีกครั้งพร้อมทำหน้าที่เป็นทั้งผู้กำกับและนักแสดงเหมือนเดิม พร้อมหนีบนักร้องสาวพันหน้าอย่าง “เจเน็ต เขียว” มาร่วมแจมความฮากันกระจุยกระจายเต็มท้องทุ่งยโสธร ร่วมด้วยน้องสาวพราวเสน่ห์อย่าง “แวว จ๊กม๊ก” และนักแสดงหน้าใหม่เลือดอีสานเข็มข้น “อุ้ม-ชัยพันธ์ นินกง” และ “ออแกน-เยาวลักษณ์ ตุ้มบุญ” ด้วยแรงบันดาลใจจากหนังรักทั้งหลายในอดีต บวกกับทิศทางความตลกโปกฮาที่ติดตัวมาตั้งแต่เกิด จนกระทั่งวันนี้จึงได้ออกมาเป็นผลงานสร้างเสียงหัวเราะในภาพยนตร์โรแมนติกคอเมดี้ชื่อว่า “แหยมยโสธร”",
                youtubeid: "Cau8FPKt-W0"
            },
            {
                movie_name: "Dr. Strange and the Multiverse of Madness",
                poster: "https://images.workpointnews.com/workpointnews/2022/05/07143648/1651909005_44639_01Main_Poster.jpg",
                description: "เรื่องราวสืบเนื่องต่อจาก Spiderman : No way home  ที่ทำให้เราเห็นว่า จักรวาลที่เราอยู่ ไม่ใช่จักรวาลเดียวอีกต่อไป และ มันก็ต้องมีตัวเรา ในอีกจักรวาล ที่อาจจะแตกต่างจากตัวเราในจักรวาลนี้ หมอแปลก สตีเฟน สเตรนจ์ เริ่มฝันแปลกๆ และต้องมาพบเจอ และช่วยเหลือ อเมริกา ชาเวจ จากการไล่ล่าของ สัตว์ประหลาด และสการ์เลต วิชท์ (วันด้า แม็กซิมอฟฟ์)  ที่ต้องการได้พลังของเธอ เพื่อค้นหาลูกชายสุดรักทั้งสอง ในจักรวาลอื่น",
                youtubeid: "cw1A7B7t7aA"
            }
        ];

    var movie_template = `<div class='movie inline' id='movie_id@@@--id--@@@' href='#inline_content_id@@@--id--@@@'>
                            <div class='inner_image'><img src='@@@--POSTER--@@@' alt='no image' /></div >
                            <h1 class='headline'>@@@--MOVIENAME--@@@</h1>
                            <p class='description'>@@@--DESCRIPTION--@@@</p>
                          </div >`;

    var inline_template = `<!-- This contains the hidden content for inline calls of @@@--MOVIENAME--@@@-->
                            <div class="inline_content" id="inline_content_id@@@--id--@@@">
                                <div class="sub_image" title="เล่นตัวอย่างหนัง">
                                    <a class="trailer_box" href="" youtubeid="@@@--YOUTUBE--@@@">
                                        <img src="@@@--POSTER--@@@" alt="no image"/>
                                    </a>
                                </div>
                                <div class="sub_content">
                                    <h1 class="sub_headline">
                                        <a class="trailer_box" href="" youtubeid="@@@--YOUTUBE--@@@" title="เล่นตัวอย่างหนัง">@@@--MOVIENAME--@@@</a>
                                    </h1>
                                    <p class="sub_description">@@@--DESCRIPTION--@@@</p>
                                </div>
                            </div>`;

    var id = 1;
    movie_datas.forEach(function (moviedata) {
        var movie_description = moviedata.description;
        if (moviedata.description.length > 500)
            movie_description = movie_description.substring(0, 480) + "...";

        var current_movie = movie_template;
        var current_inline = inline_template;

        current_movie = current_movie.replace(/@@@--POSTER--@@@/g, moviedata.poster).replace(/@@@--MOVIENAME--@@@/g, moviedata.movie_name)
            .replace(/@@@--DESCRIPTION--@@@/g, movie_description).replace(/@@@--id--@@@/g, id);
        current_inline = current_inline.replace(/@@@--POSTER--@@@/g, moviedata.poster).replace(/@@@--MOVIENAME--@@@/g, moviedata.movie_name)
            .replace(/@@@--DESCRIPTION--@@@/g, moviedata.description).replace(/@@@--YOUTUBE--@@@/g, moviedata.youtubeid).replace(/@@@--id--@@@/g, id);
        id += 1;

        $("#main_content").append(current_movie);
        $("#hidden_content").append(current_inline);
    });

    $(".movie").mouseenter(function () {
        $(this).stop().animate({
            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.3) , 0 6px 20px 0 rgba(0, 0, 0, 0.28)"
        }, 200);
    });

    $(".movie").mouseleave(function () {
        $(this).stop().animate({
            boxShadow: "0 0px 0px 0 rgba(0, 0, 0, 0) , 0 0px 0px 0 rgba(0, 0, 0, 0)"
        }, 200);
    });

    $(".photobox").colorbox({
        rel: 'photobox',
        transition: "fade",
        height: "800px"
    });

    $(".inline").colorbox({
        inline: true,
        width: "40%",
        overlayClose: true,
        closeButton: true
    });
    $("#click").click(function () {
        $('#click').css({ "background-color": "#f00", "color": "#fff", "cursor": "inherit" }).text("Open this window again and this message will still be here.");
        return false;
    });

    $(".trailer_box").grtyoutube({
        autoPlay: false,
        theme: "dark"
    });

    $(document).tooltip({
        position: {
            my: "left-180 center",
            at: "right center"
        }
    });
});