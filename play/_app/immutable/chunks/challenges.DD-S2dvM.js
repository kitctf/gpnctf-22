const e=[{id:"a-full-solve",name:"A full solve's what I'm thinking of",description:`Exciting news! Our chief scientists found a way to do frequency analysis
on binary files. Surprinsingly it isn't just changing the file ending
to \`.mp3\` and putting it into Audacity. Have a try for yourself below!

*Note: The binary \`/catflag\` prints the flag*

Hint: This challenge is about ELF Binaries (Linux executables)
`,minPoints:50,maxPoints:500,points:89,tags:["misc","intro"],solves:86,firstBlood:{teamId:"ChaosPottheads",solveTime:1717150584306},extraData:{authors:["MisterPine"],connectUrl:"a-full-solve.ctf.kitctf.de",files:[],imageUrl:"/archive/a-full-solve/d005fc7e0dc9557d27fdbc71d3279b956268513b52d2120a2524f612cd9e5b81/cover.png",previewDuration:12,previewStart:23,videoId:"9sJUDx7iEJw"},solvedByMe:null},{id:"a-fuller-solve",name:"A fuller solve's what I'm thinking of",description:`I wanted to build an intro rev challenge but it didn't
work as intended when I deployed it to my Rocky 9 server.
Maybe you can work around the issue and leak the flag in \`/flag\`
`,minPoints:50,maxPoints:500,points:453,tags:["misc"],solves:3,firstBlood:{teamId:"dingus",solveTime:1717169943882},extraData:{authors:["MisterPine","ju256"],connectUrl:"a-fuller-solve.ctf.kitctf.de",files:[],imageUrl:"/archive/a-fuller-solve/1cc9756f558645b9b56a0114bff129f5c331e9f23b4f8cec7a2ce70c618aae0a/cover.png",previewDuration:6,previewStart:18,videoId:"VjGSMUep6_4"},solvedByMe:null},{id:"airgap",name:"Air Gap",description:`This is an onsite challenge at GPN and therefore does not give any points. However, if you are here in person make sure to check it out!  
Please note that the challenge is only available during opening hours at GPN.  
---
This challenge is almost impossible. You must bridge the air gap (look for the climbing assembly at GPN and talk to MikeTango or pony) and infiltrate the airgapped device. The device in question is a standard Pi OS installation with a tiny script that gets autoexecuted whenever a USB stick is plugged in.

\`\`\`bash
#!/bin/bash
set -e;
mount /dev/sd*1 /mnt;
cp /home/pony/The_Super_Secret_Flag.txt /mnt/;
umount /mnt;
\`\`\`

Yes, you read that right. The device will hack itself and automatically give you the flag... if you can reach it.  :P

Those of you who cannot actually be present at GPN can try to hire an external contractor to do the infiltration for you. Some suggestions where you can post your job offers:
Matrix:     #gpn:entropia.de
Mastodon:   use the #gpn22 tag
Wiki:       https://entropia.de/GPN22:Dating
`,minPoints:0,maxPoints:0,points:0,tags:["misc"],solves:6,firstBlood:{teamId:"Stuss",solveTime:1717184760198},extraData:{authors:["pony","MikeTango"],files:[],imageUrl:"/archive/airgap/f42fc42dbfd54737d9cf663ac97079fdfc468bebec7046c85e87fe033e537aa6/cover.png",previewDuration:5,previewStart:130,videoId:"kER_45sGsn0"},solvedByMe:null},{id:"archventure-time",name:"Archventure time",description:`I found this funny multi-arch music software but I can't remember my license key.

Can you recover it for me?
`,minPoints:50,maxPoints:500,points:135,tags:["rev","easy"],solves:41,firstBlood:{teamId:"CyberSpace",solveTime:1717157105663},extraData:{authors:["Ik0ri4n"],files:[{name:"archventure-time.tar.gz",url:"/play/archive/archventure-time/ddbc88c937b2609a9c319ced2407b4183ee1c4971534a01da11e344912be5e61/archventure-time.tar.gz"}],imageUrl:"/archive/archventure-time/ddbc88c937b2609a9c319ced2407b4183ee1c4971534a01da11e344912be5e61/cover.png",previewDuration:11,previewStart:42,videoId:"O8RwDfYMUjk"},solvedByMe:null},{id:"back-to-the-roots",name:"Back to the roots",description:`Somewhere under a big pile of paper I found some notes
about this really cool encryption algorithm. I updated
it to the digital age in the hope that it is much
safer now.
`,minPoints:50,maxPoints:500,points:313,tags:["crypto"],solves:10,firstBlood:{teamId:"/bad",solveTime:1717166857459},extraData:{authors:["s1nn105","MisterPine","I Al Istannen"],files:[{name:"back-to-the-roots.tar.gz",url:"/play/archive/back-to-the-roots/0f5093202277d86cf268450510ecd07934acdd6575904485acdc63405e763b54/back-to-the-roots.tar.gz"}],imageUrl:"/archive/back-to-the-roots/0f5093202277d86cf268450510ecd07934acdd6575904485acdc63405e763b54/cover.png",previewDuration:10,previewStart:75,videoId:"LDU_Txk06tM"},solvedByMe:null},{id:"boombox",name:"Boombox",description:`I have no clue of rust and no clue of crypto, but then with no challenge I stood crying in the rain and rusted.
`,minPoints:50,maxPoints:500,points:124,tags:["crypto"],solves:47,firstBlood:{teamId:"gigi",solveTime:1717151640673},extraData:{authors:["Liam | 2<3"],files:[{name:"boombox.tar.gz",url:"/play/archive/boombox/a768739b19373bb13c26c614d9ad470c86bfebb67a49d800ec74dd06f62cfdb4/boombox.tar.gz"}],imageUrl:"/archive/boombox/a768739b19373bb13c26c614d9ad470c86bfebb67a49d800ec74dd06f62cfdb4/cover.png",previewDuration:10,previewStart:265,videoId:"XbGs_qK2PQA"},solvedByMe:null},{id:"count-me-out",name:"Count me out",description:`I have developed a new, revolutionary cipher that is not constrained to one block cipher.
It is safe and secure. If you are not convinced, 
I will provide a flag to anyone who manages to win the 'In No Desirable Case Attacks Possible' (IND-CPA) mode.
`,minPoints:50,maxPoints:500,points:181,tags:["crypto"],solves:26,firstBlood:{teamId:"Platypwnies",solveTime:1717239192625},extraData:{authors:["s1nn105"],connectUrl:"count-me-out.ctf.kitctf.de",files:[{name:"count-me-out.tar.gz",url:"/play/archive/count-me-out/ea2fdad2064b6a9c90a3f9929233384673f8251d599f04b6f9ee828e9ecd00a2/count-me-out.tar.gz"}],imageUrl:"/archive/count-me-out/ea2fdad2064b6a9c90a3f9929233384673f8251d599f04b6f9ee828e9ecd00a2/cover.png",previewDuration:5,previewStart:82,videoId:"D0Ajq682yrA"},solvedByMe:null},{id:"date-v2",name:"Date v2",description:`With the last [Date](https://2022.ctf.kitctf.de/challenges#Date-2) not going as planned, you are lucky to get another chance. Make sure to not fuck it up this time.
`,minPoints:50,maxPoints:500,points:500,tags:["pwn","baby"],solves:1,firstBlood:{teamId:"h4tum",solveTime:1717231812153},extraData:{authors:["ju256"],connectUrl:"date-v2.ctf.kitctf.de",files:[{name:"date-v2.tar.gz",url:"/play/archive/date-v2/4be98e938cceefd736bdd9821b68c7d266e9cd98d51e126cb535cab0421faab0/date-v2.tar.gz"}],imageUrl:"/archive/date-v2/4be98e938cceefd736bdd9821b68c7d266e9cd98d51e126cb535cab0421faab0/cover.png",previewDuration:10,previewStart:15600,videoId:"jIQ6UV2onyI"},solvedByMe:null},{id:"dreamer",name:"Dreamer",description:`It would be a shame if you could exploit this sleepy binary.
`,minPoints:50,maxPoints:500,points:313,tags:["misc","pwn"],solves:10,firstBlood:{teamId:"pwnlentoni",solveTime:1717244294806},extraData:{authors:["s1nn105"],connectUrl:"dreamer.ctf.kitctf.de",files:[{name:"dreamer.tar.gz",url:"/play/archive/dreamer/080c12c557cd4a79cec4d70a9c69fbb137ee253ddaab7f049f24a92dd4edecc1/dreamer.tar.gz"}],imageUrl:"/archive/dreamer/080c12c557cd4a79cec4d70a9c69fbb137ee253ddaab7f049f24a92dd4edecc1/cover.png",previewDuration:12,previewStart:35,videoId:"Cd2O4utPw6c"},solvedByMe:null},{id:"electric",name:"Electric",description:'`from longnight import nosleep`\n\nWhen I run it I get `b"m\'7Y\\xcaZ\\xb4\\x06\\xbd\\x92\\xae\\xf1B\\x15\\xd1IP1a\\xdcs\\xde&\\xadWz\\xb4\\x12\\xab\\xa5]\\x1e\\x83\\x98\\xc6\\xa9\\x89\\t\\xa9\\tNW\\x9c\\xe0\\n\\x9f\\x11\\x83\\xa1\\xd1\\x03\\xad"`\n',minPoints:50,maxPoints:500,points:286,tags:["rev"],solves:12,firstBlood:{teamId:"LONG $ETH",solveTime:1717177785677},extraData:{authors:["Liam | 2<3"],files:[{name:"electric.tar.gz",url:"/play/archive/electric/c8befe387570cce9be417cace9aae74a512920aa630b1c0d27de93f67d6790be/electric.tar.gz"}],imageUrl:"/archive/electric/c8befe387570cce9be417cace9aae74a512920aa630b1c0d27de93f67d6790be/cover.png",previewDuration:10,previewStart:75,videoId:"tl6u2NASUzU"},solvedByMe:null},{id:"even-more-flags",name:"Even more flags",description:`I heard you like flags, so I launched Chrome with a lot of flags again so you can get your flag!

This time the flag is localhost:1337/flag, and the bot will visit your URL!
`,minPoints:50,maxPoints:500,points:141,tags:["web"],solves:38,firstBlood:{teamId:"L3ak",solveTime:1717237314632},extraData:{authors:["13x1"],connectUrl:"even-more-flags.ctf.kitctf.de",files:[{name:"even-more-flags.tar.gz",url:"/play/archive/even-more-flags/29213b527620970453b006ac40803fb91fcc30628e123cc622933fb87a959db6/even-more-flags.tar.gz"}],imageUrl:"/archive/even-more-flags/29213b527620970453b006ac40803fb91fcc30628e123cc622933fb87a959db6/cover.png",previewDuration:11,previewStart:21,videoId:"3aLzArM0a9Q"},solvedByMe:null},{id:"flag-remover",name:"Flag remover",description:`I removed the flag :P
`,minPoints:50,maxPoints:500,points:274,tags:["web"],solves:13,firstBlood:{teamId:"pwnlentoni",solveTime:1717161299706},extraData:{authors:["13x1"],connectUrl:"flag-remover.ctf.kitctf.de",files:[{name:"flag-remover.tar.gz",url:"/play/archive/flag-remover/0fb1849f8e94ee541ae2a8e994fdea51f95430df566cd494b2331572a9aee48b/flag-remover.tar.gz"}],imageUrl:"/archive/flag-remover/0fb1849f8e94ee541ae2a8e994fdea51f95430df566cd494b2331572a9aee48b/cover.png",previewDuration:7,previewStart:69,videoId:"OfH9j-TLg3U"},solvedByMe:null},{id:"future-of-pwning-1",name:"Future of Pwning 1",description:`There's this cool new forward compatible ISA. I created an online emulator so that you can try it out!

Image credit: [@TauAs](https://mastodon.social/@TauAs/104149207370148455)
`,minPoints:50,maxPoints:500,points:104,tags:["pwn","easy"],solves:63,firstBlood:{teamId:"dingus",solveTime:1717151148157},extraData:{authors:["Ordoviz"],connectUrl:"future-of-pwning-1.ctf.kitctf.de",files:[{name:"future-of-pwning-1.tar.gz",url:"/play/archive/future-of-pwning-1/efb25a968bd983ced954c2445baae29eb83ea79a9c3955616e19ea28bd6ab6a2/future-of-pwning-1.tar.gz"}],imageUrl:"/archive/future-of-pwning-1/efb25a968bd983ced954c2445baae29eb83ea79a9c3955616e19ea28bd6ab6a2/cover.png",previewDuration:12,previewStart:18,videoId:"AAvQXwEbKIA"},solvedByMe:null},{id:"future-of-pwning-2",name:"Future of Pwning 2",description:`Stop hacking my lovely emulator!!1 I removed all syscalls besides some very basic ones so hacking is impossible now.

Image credit: [@zackfreedman](https://x.com/zackfreedman/status/1517555638456389632)
`,minPoints:50,maxPoints:500,points:500,tags:["pwn"],solves:1,firstBlood:{teamId:"h4tum",solveTime:1717270469428},extraData:{authors:["Ordoviz"],connectUrl:"future-of-pwning-2.ctf.kitctf.de",files:[{name:"future-of-pwning-2.tar.gz",url:"/play/archive/future-of-pwning-2/3886278af235ed8b95f192a9efffa4318394ec33a0eb7003e7b2d14cd3279382/future-of-pwning-2.tar.gz"}],imageUrl:"/archive/future-of-pwning-2/3886278af235ed8b95f192a9efffa4318394ec33a0eb7003e7b2d14cd3279382/cover.png",previewDuration:10,previewStart:184,videoId:"EwbMkIROOGU"},solvedByMe:null},{id:"gift",name:"Gift",description:`A gift from the king.
`,minPoints:50,maxPoints:500,points:328,tags:["pwn"],solves:9,firstBlood:{teamId:"pymi",solveTime:1717244667409},extraData:{authors:["intrigus"],connectUrl:"gift.ctf.kitctf.de",files:[{name:"gift.tar.gz",url:"/play/archive/gift/5796110d65a275f57983beab55650cf45942fd2d0541c3f8ef26cba51317f8cb/gift.tar.gz"}],imageUrl:"/archive/gift/5796110d65a275f57983beab55650cf45942fd2d0541c3f8ef26cba51317f8cb/cover.png",previewDuration:3,previewStart:51,videoId:"3vI_7os2V_o"},solvedByMe:null},{id:"hackerman-hash",name:"Hackerman Hash",description:`You know when they say the preimages of a hashfunction should be hard to compute and than they choose some weak primitive recursive function.
I present to you a revolutionary solution that builds upon (quite literally) one of the largest problems of computer science.  Try bruteforcing this.
`,minPoints:50,maxPoints:500,points:383,tags:["crypto"],solves:6,firstBlood:{teamId:"Platypwnies",solveTime:1717215861649},extraData:{authors:["s1nn105"],files:[{name:"hackerman-hash-part1.tar.gz",url:"/play/archive/hackerman-hash/42fc9c0b262d6f28271804ecefecbe726f9aafac87046c5577e8dba6a65a4140/hackerman-hash-part1.tar.gz"},{name:"hackerman-hash-part2.tar.gz",url:"/play/archive/hackerman-hash/42fc9c0b262d6f28271804ecefecbe726f9aafac87046c5577e8dba6a65a4140/hackerman-hash-part2.tar.gz"},{name:"hackerman-hash-part3.tar.gz",url:"/play/archive/hackerman-hash/42fc9c0b262d6f28271804ecefecbe726f9aafac87046c5577e8dba6a65a4140/hackerman-hash-part3.tar.gz"}],imageUrl:"/archive/hackerman-hash/42fc9c0b262d6f28271804ecefecbe726f9aafac87046c5577e8dba6a65a4140/cover.png",previewDuration:17,previewStart:120,videoId:"FGRs-6mMFTU"},solvedByMe:null},{id:"inspect-element",name:"Inspect Element",description:"Maybe using Inspect Element will help you!\n\n> Small hint: If you're struggling with reproducing it on remote, you can use `socat` to proxy the remote instance to `localhost:1337` like this: \n> \n> ```\n> socat TCP-LISTEN:1337,fork OPENSSL:xxx--xxx-1234.ctf.kitctf.de:443\n> ```\n> \n> and it should behave exactly like a locally running docker container.\n",minPoints:50,maxPoints:500,points:96,tags:["web"],solves:73,firstBlood:{teamId:"bengsky",solveTime:1717153659294},extraData:{authors:["13x1"],connectUrl:"inspect-element.ctf.kitctf.de",files:[{name:"inspect-element.tar.gz",url:"/play/archive/inspect-element/7f49888a928d6ed139b458dca9ecf92fd651158befbb7ffe63b87f9a4b71438f/inspect-element.tar.gz"}],imageUrl:"/archive/inspect-element/7f49888a928d6ed139b458dca9ecf92fd651158befbb7ffe63b87f9a4b71438f/cover.png",previewDuration:8,previewStart:41,videoId:"E3aO5lfho_Y"},solvedByMe:null},{id:"knitted-flag",name:"Knitted Flag",description:`I got a bit too excited when I started my newest knitting project and accidentally turned my challenge flag into a knitting pattern.
`,minPoints:50,maxPoints:500,points:176,tags:["misc","easy"],solves:27,firstBlood:{teamId:"dingus",solveTime:1717151417664},extraData:{authors:["PlantPalFynn"],files:[{name:"knitted-flag.tar.gz",url:"/play/archive/knitted-flag/ce69f8b78ecbf8fe453de223f002292a20c72506f0f468cde161214d46c38c58/knitted-flag.tar.gz"}],imageUrl:"/archive/knitted-flag/ce69f8b78ecbf8fe453de223f002292a20c72506f0f468cde161214d46c38c58/cover.png",previewDuration:10,previewStart:27,videoId:"G6srDT5jCKc"},solvedByMe:null},{id:"letter-to-the-editor",name:"Letter to the editor",description:`Old software, good software:
 
Clone and pwn: https://github.com/FirebaseExtended/firepad
`,minPoints:50,maxPoints:500,points:213,tags:["web"],solves:20,firstBlood:{teamId:"pwnlentoni",solveTime:1717162371666},extraData:{authors:["mawalu"],connectUrl:"letter-to-the-editor.ctf.kitctf.de",files:[],imageUrl:"/archive/letter-to-the-editor/4b290c6a11e2ec28f9a6bb030da4e5374339c682a832bccc8aca39c1df8e32ce/cover.png",previewDuration:10,previewStart:19,videoId:"z97qLNXeAMQ"},solvedByMe:null},{id:"never-gonna-give-you-ub",name:"Never gonna give you UB",description:`Can you get this program to do what you want?
`,minPoints:50,maxPoints:500,points:62,tags:["pwn","intro"],solves:241,firstBlood:{teamId:"FoocHackz",solveTime:1717150207639},extraData:{authors:["MisterPine"],connectUrl:"never-gonna-give-you-ub.ctf.kitctf.de",files:[{name:"never-gonna-give-you-ub.tar.gz",url:"/play/archive/never-gonna-give-you-ub/5ddaf15b5dab63e2d493216631cf109ee1cf03fee3c27ab517163bede41923ce/never-gonna-give-you-ub.tar.gz"}],imageUrl:"/archive/never-gonna-give-you-ub/5ddaf15b5dab63e2d493216631cf109ee1cf03fee3c27ab517163bede41923ce/cover.png",previewDuration:15,previewStart:22975,videoId:"Ou5Bhe7o3J0"},solvedByMe:null},{id:"never-gonna-let-you-crypto",name:"Never gonna let you crypto",description:`You read the title and thought Blockchain? You were successfully baited.
Like the people before you, you now have to solve this challenge.
`,minPoints:50,maxPoints:500,points:56,tags:["crypto","intro"],solves:430,firstBlood:{teamId:"Sanji_trum_Crypto",solveTime:1717149851137},extraData:{authors:["s1nn105"],files:[{name:"never-gonna-let-you-crypto.tar.gz",url:"/play/archive/never-gonna-let-you-crypto/7c7f543d248d9001a9105f87ff1521836e1396be7e6e5235f700d8d55dd3ec37/never-gonna-let-you-crypto.tar.gz"}],imageUrl:"/archive/never-gonna-let-you-crypto/7c7f543d248d9001a9105f87ff1521836e1396be7e6e5235f700d8d55dd3ec37/cover.png",previewDuration:10,previewStart:30,videoId:"y6120QOlsfU"},solvedByMe:null},{id:"never-gonna-run-around-and-reverse-you",name:"Never gonna run around and reverse you",description:`I thought of this really cool collision free hash function
and hashed the flag with it. Theoretically you shouldn't
be able to reverse it...
`,minPoints:50,maxPoints:500,points:58,tags:["rev","intro"],solves:346,firstBlood:{teamId:"ATLAS",solveTime:1717150385667},extraData:{authors:["MisterPine"],files:[{name:"never-gonna-run-around-and-reverse-you.tar.gz",url:"/play/archive/never-gonna-run-around-and-reverse-you/d097be4035570fcf0b540f110381a07052d1f64804fe8711cf80ab04f86c1ad5/never-gonna-run-around-and-reverse-you.tar.gz"}],imageUrl:"/archive/never-gonna-run-around-and-reverse-you/d097be4035570fcf0b540f110381a07052d1f64804fe8711cf80ab04f86c1ad5/cover.png",previewDuration:13,previewStart:38,videoId:"1S1fISh-pag"},solvedByMe:null},{id:"never-gonna-tell-a-lie-and-type-you",name:"Never gonna tell a lie and type you",description:`todo
`,minPoints:50,maxPoints:500,points:62,tags:["web","intro"],solves:241,firstBlood:{teamId:"pwnlentoni",solveTime:1717150661948},extraData:{authors:["s1nn105","13x1"],connectUrl:"never-gonna-tell-a-lie-and-type-you.ctf.kitctf.de",files:[{name:"never-gonna-tell-a-lie-and-type-you.tar.gz",url:"/play/archive/never-gonna-tell-a-lie-and-type-you/4a5c8feaf3667a4be6766a4d469be9715753c999224b6606ddcb32329404587e/never-gonna-tell-a-lie-and-type-you.tar.gz"}],imageUrl:"/archive/never-gonna-tell-a-lie-and-type-you/4a5c8feaf3667a4be6766a4d469be9715753c999224b6606ddcb32329404587e/cover.png",previewDuration:10,previewStart:110,videoId:"HluyqzodLvQ"},solvedByMe:null},{id:"no-crypto",name:"No crypto",description:`I swear this isn't crypto. Pinky promise. And you don't have to bruteforce anything.
`,minPoints:50,maxPoints:500,points:190,tags:["misc"],solves:24,firstBlood:{teamId:"The Few Chosen",solveTime:1717155673778},extraData:{authors:["13x1"],connectUrl:"no-crypto.ctf.kitctf.de",files:[{name:"no-crypto.tar.gz",url:"/play/archive/no-crypto/f8485a01f126dda8e61508848eb49b139c8dcac6573bdddfbd57b610205c76aa/no-crypto.tar.gz"}],imageUrl:"/archive/no-crypto/f8485a01f126dda8e61508848eb49b139c8dcac6573bdddfbd57b610205c76aa/cover.png",previewDuration:3,previewStart:21,videoId:"pWJ-DkunPmM"},solvedByMe:null},{id:"out-of-the-ordinary",name:"Out of the ordinary",description:`On your never ending search for flags you stumle into a deep swamp.
Suddenly, in front of you, you find a weird little green stanger standing.
"I am wondering, why are you here", the creature asks you. "I am looking
flags" you answer. "Looking for flags? Found something else, you have, I
would say, hmmm?" "Look, I'm really sorry but I need to get back to solving
challenges or I'll never get my full solve", you say as you try to push the
creature out of your way. "No! No, no! Stay and help you, I will. Find your
banner, hmm?", the creature says and won't get out of your way. "I'm not
looking for a banner, I'm looking for a flag!" you dement. "Oohhh, Flag.
Challenge. Solve. You need to solve a challenge". "Do you have a flag?" "A
flag? Perhaps... Hmmm, give you a challenge, I can. Solve it you must" and
with that the little creature scurries away and returns after a while with
a mysterious little box.

"A communication device, this is. Send me a message you must". You take a
closer look at the box. It has a screen that reads

\`\`\`kt
println("MESSAGE PLACEHOLDER, PLEASE REPLACE")

println("MESSAGE TOKEN: [RANDOM]")
\`\`\`

and a keyboard below the screen. "Only append code, you can, yes? Replace
the placeholder with your message, you must. But not touch the token or
add any lines, you may, hmmm?", as the seemingly *intellij*ent creature
explains the rules to you, it *scratches* its head, "Hope, an *Idea* you
have, I do". "Well, not immediately, but I will certainly give it a try!",
you answer, still slightly confused. "No! Try not. Solve. Or solve not.
There is no try.", the creature admonishes you.
`,minPoints:50,maxPoints:500,points:453,tags:["rev"],solves:3,firstBlood:{teamId:"LONG $ETH",solveTime:1717160648159},extraData:{authors:["MisterPine"],connectUrl:"out-of-the-ordinary.ctf.kitctf.de",files:[],imageUrl:"/archive/out-of-the-ordinary/fd4cbc075c84224f37eb6b7b9934ab74d77d87141595fa65076f47651044a598/cover.png",previewDuration:7,previewStart:37,videoId:"slmqKzgHbYY"},solvedByMe:null},{id:"out-of-the-ordinary-a-new-stage",name:"Out of the ordinary: A new stage",description:`"Eearned the last flag you have, hmmm?", the little green creature asks
you. "Another message you must send. But more challenging this time it is.
But for your effort, reward you with a flag, I might, yes?"
`,minPoints:50,maxPoints:500,points:500,tags:["rev"],solves:0,firstBlood:null,extraData:{authors:["MisterPine"],connectUrl:"out-of-the-ordinary-a-new-stage.ctf.kitctf.de",files:[],imageUrl:"/archive/out-of-the-ordinary-a-new-stage/993d018ba11774b302aae32305625f7cf41248b50697d6eac8bf17ffda697050/cover.png",previewDuration:10,previewStart:8,videoId:"YAcQxnJ0djQ"},solvedByMe:null},{id:"parabox",name:"Parabox",description:`[This game](https://www.patricksparabox.com/) looked real fun, unfortunately they did not support my platform. 
I wanted to play it anyway, so I built this small version myself. 
Some things went wrong (writing assembly is hard), but I'm sure you can win nonetheless. 

Go push some paraboxes!
`,minPoints:50,maxPoints:500,points:500,tags:["rev","baby"],solves:1,firstBlood:{teamId:"TheRomanXpl0it",solveTime:1717209006960},extraData:{authors:["Alkalem"],connectUrl:"parabox.ctf.kitctf.de",files:[{name:"parabox.tar.gz",url:"/play/archive/parabox/8de7f10cf60ed6fdb4fe4889c5123897e4901e8eefec832a22b9e92ce844ac22/parabox.tar.gz"}],imageUrl:"/archive/parabox/8de7f10cf60ed6fdb4fe4889c5123897e4901e8eefec832a22b9e92ce844ac22/cover.png",previewDuration:10,previewStart:43,videoId:"2clySPX0m7A"},solvedByMe:null},{id:"petween-reasonable-lines",name:"Petween Reasonable Lines",description:`Now you have two problems.

Image credit: [@ThePracticalDev](https://x.com/ThePracticalDev/status/710156980535558144)
`,minPoints:50,maxPoints:500,points:127,tags:["pwn","easy"],solves:45,firstBlood:{teamId:"pwnlentoni",solveTime:1717154891949},extraData:{authors:["Ordoviz"],connectUrl:"petween-reasonable-lines.ctf.kitctf.de",files:[{name:"petween-reasonable-lines.tar.gz",url:"/play/archive/petween-reasonable-lines/e269eb98eeaa908a8f169eb486edd54eb576ba1a283b9b5e6c34980ca3516224/petween-reasonable-lines.tar.gz"}],imageUrl:"/archive/petween-reasonable-lines/e269eb98eeaa908a8f169eb486edd54eb576ba1a283b9b5e6c34980ca3516224/cover.png",previewDuration:10,previewStart:13,videoId:"ReblZ7o7lu4"},solvedByMe:null},{id:"polyrop",name:"Polyrop",description:`I picked the wrong path at Cyber Security Rumble 2024's polypwn challenge and failed.
Can you do it with more time ~~and a win function~~?
NOTE: Knowledge of polypwn is not required!
Credit to @LevitatingLion for the original challenge and part of the code.
`,minPoints:50,maxPoints:500,points:500,tags:["pwn","baby"],solves:1,firstBlood:{teamId:"Platypwnies",solveTime:1717248638299},extraData:{authors:["intrigus"],connectUrl:"polyrop.ctf.kitctf.de",files:[{name:"polyrop.tar.gz",url:"/play/archive/polyrop/1e286f2a54e6d6182c27585e6403dff291abe3f659973f2e76ffcdbc6f1b518e/polyrop.tar.gz"}],imageUrl:"/archive/polyrop/1e286f2a54e6d6182c27585e6403dff291abe3f659973f2e76ffcdbc6f1b518e/cover.png",previewDuration:10,previewStart:85,videoId:"rXefFHRgyE0"},solvedByMe:null},{id:"polyrop-warmup",name:"Polyrop warmup",description:`I picked the wrong path at Cyber Security Rumble 2024's polypwn challenge and failed.
Can you do it with more time and a win function?
NOTE: Knowledge of polypwn is not required!
Credit to @LevitatingLion for the original challenge and part of the code.
`,minPoints:50,maxPoints:500,points:274,tags:["pwn"],solves:13,firstBlood:{teamId:"Platypwnies",solveTime:1717161240045},extraData:{authors:["intrigus"],connectUrl:"polyrop-warmup.ctf.kitctf.de",files:[{name:"polyrop-warmup.tar.gz",url:"/play/archive/polyrop-warmup/ccc66eed41ad24764d3f76dc1297096c603e4baf5c0afef67bdd7e27761322f8/polyrop-warmup.tar.gz"}],imageUrl:"/archive/polyrop-warmup/ccc66eed41ad24764d3f76dc1297096c603e4baf5c0afef67bdd7e27761322f8/cover.png",previewDuration:10,previewStart:2,videoId:"FRZ9cUEF0NE"},solvedByMe:null},{id:"provably-solved",name:"Provably Solved",description:`We wrote a whitepaper about this challenge. Have a look at it
at the adminbot interface!
`,minPoints:50,maxPoints:500,points:500,tags:["rev"],solves:0,firstBlood:null,extraData:{authors:["MisterPine","I Al Istannen"],connectUrl:"provably-solved.ctf.kitctf.de",files:[],imageUrl:"/archive/provably-solved/74420f3d09e71161b634149e01f752f4625aa2fe8f0b470fda6a97edab24d20b/cover.png",previewDuration:8,previewStart:4,videoId:"rMjYvL_I4Eg"},solvedByMe:null},{id:"refined-notes",name:"Refined Notes",description:`All my friends warned me about xss, so I created this note taking app that only accepts "refined" Notes.
`,minPoints:50,maxPoints:500,points:118,tags:["web"],solves:51,firstBlood:{teamId:"Platypwnies",solveTime:1717155000195},extraData:{authors:["WhoNeedsSleep"],connectUrl:"refined-notes.ctf.kitctf.de",files:[],imageUrl:"/archive/refined-notes/b053d0064d4fc2a687951ec9bcb7b20951f0c20c722428c15c14fac71e60eaf0/cover.png",previewDuration:5,previewStart:141,videoId:"rvrZJ5C_Nwg"},solvedByMe:null},{id:"secure-notes",name:"Secure Notes",description:`These XSS vectors are getting ridiculous! So I made a secure
note app. The only NPM dependency is DOMPurify, and I directly
store the output of \`DOMPurify.sanitize\` and serve that back,
so it *has* to be secure, right? It's barely 16 LoC!
`,minPoints:50,maxPoints:500,points:405,tags:["web"],solves:5,firstBlood:{teamId:"b01lers",solveTime:1717161419906},extraData:{authors:["13x1"],connectUrl:"secure-notes.ctf.kitctf.de",files:[{name:"secure-notes.tar.gz",url:"/play/archive/secure-notes/29976fc51e57a03f4677abb1443cd451c0569df220b52b067e4785c8fe1fc9ae/secure-notes.tar.gz"}],imageUrl:"/archive/secure-notes/29976fc51e57a03f4677abb1443cd451c0569df220b52b067e4785c8fe1fc9ae/cover.png",previewDuration:7,previewStart:33,videoId:"c1Fv1uKTd-w"},solvedByMe:null},{id:"so-many-flags",name:"So many flags",description:`I heard you like flags, so I launched Chrome with a lot of flags so you can get your flag!

The flag is in \`/flag.txt\`, and the bot will visit the HTML file you uploaded!
`,minPoints:50,maxPoints:500,points:99,tags:["web"],solves:69,firstBlood:{teamId:"L3ak",solveTime:1717150782656},extraData:{authors:["13x1"],connectUrl:"so-many-flags.ctf.kitctf.de",files:[{name:"so-many-flags.tar.gz",url:"/play/archive/so-many-flags/c246f990ca38d095b315b7033763c7d9f629ce1d454336222ffb7cd265274a85/so-many-flags.tar.gz"}],imageUrl:"/archive/so-many-flags/c246f990ca38d095b315b7033763c7d9f629ce1d454336222ffb7cd265274a85/cover.png",previewDuration:13,previewStart:3,videoId:"cobmapyCgKA"},solvedByMe:null},{id:"terminator-01",name:"Terminator 1",description:`I heard supply-chain security is all the rage now, after a weird XY
problem. Not sure what they were up about, but I was probably not asking
the correct questions...
Undeterred, I went shopping in some poor PhD student's lab and found this
lovely contraption, ending this problem once and for all: As soon as evil
code will be executed, your VM will be killed *mercilessly*.

I even built a really cute application for cooking up your cyber recipes
to try it out!

This challenge is a bit picky, random variations in the codepaths your JVM
takes can make it crash. If it accepts your malicious data, it will likely
work on the remote.
`,minPoints:50,maxPoints:500,points:478,tags:["pwn"],solves:2,firstBlood:{teamId:"h4tum",solveTime:1717263335515},extraData:{authors:["I Al Istannen"],connectUrl:"terminator-01.ctf.kitctf.de",files:[{name:"terminator-01.tar.gz",url:"/play/archive/terminator-01/11ac1ea1e68c7488333b0d681638e77446e95b540f892f4d4a167f8fcfc8160d/terminator-01.tar.gz"}],imageUrl:"/archive/terminator-01/11ac1ea1e68c7488333b0d681638e77446e95b540f892f4d4a167f8fcfc8160d/cover.png",previewDuration:3,previewStart:45,videoId:"pcg-E_qyMOI"},solvedByMe:null},{id:"root-of-all-evil",name:"The root of all evil",description:`We want this CTF to be perfect! As we hope you all know this requires us, as good software engineers, 
to design a specification we can devolop challenges against. So we started meticulously crafting
documents for our scope statements and product requirements. Somehow this got a little out of hand
(we really don't know how. We set a timeline and used a strict waterfall model.
Theoretically this should have worked out perfectly...) so we need your help to finish the requirements
document before it's to late...

Specifically I have a problem with the \`The root of all evil\` challenge. I designed a beautiful
solve ~~script~~ sequence diagram to prove this challenge is solvable. Since I didn't want to type the
flag out I just shoved a piece of paper into the disk drive and somehow this mess appeared in my diagram...
Tragically, before I could save it, my cat ate the original piece of paper with the flag I need.
But I have a feeling this weird assortment of symbols contains some info about the flag. Could you please
recover it for me? I desperately need it to check the solutions to the challenge. If it helps: I used PlantUML for my diagram

Please help me!!!!
`,minPoints:50,maxPoints:500,points:500,tags:["misc"],solves:1,firstBlood:{teamId:"Platypwnies",solveTime:1717231601524},extraData:{authors:["MisterPine"],connectUrl:"root-of-all-evil.ctf.kitctf.de",files:[],imageUrl:"/archive/root-of-all-evil/386a12e5b74653d8f29aed52a0b68172b3e946a1ab5fc42e8e998b1ac006050d/cover.png",previewDuration:11,previewStart:440,videoId:"-5wpm-gesOY"},solvedByMe:null},{id:"too-many-cooks",name:"Too many cooks",description:`Oh no! Something awfull happened and we let too many cooks cook up this challenge. I hope you can still get something edible out of it...
`,minPoints:50,maxPoints:500,points:345,tags:["pwn","rev"],solves:8,firstBlood:{teamId:"pwnlentoni",solveTime:1717202388857},extraData:{authors:["MisterPine"],connectUrl:"too-many-cooks.ctf.kitctf.de",files:[{name:"too-many-cooks.tar.gz",url:"/play/archive/too-many-cooks/874bf05938268d8fa69d4430a94ac85f2275f9d84f3f6b1ab048666c8a084084/too-many-cooks.tar.gz"}],imageUrl:"/archive/too-many-cooks/874bf05938268d8fa69d4430a94ac85f2275f9d84f3f6b1ab048666c8a084084/cover.png",previewDuration:16,previewStart:27,videoId:"Vqbk9cDX0l0"},solvedByMe:null},{id:"trapdoor",name:"Trapdoor",description:`Okay honestly I don't know how I can possibly justify this.
Either this is hard or I fucked up spectacular. No this challenges has not been playtested.
But a solve script exists.

**Note from the infra team**: No authors were hurt in the making of this CTF. They were insane already...
`,minPoints:50,maxPoints:500,points:274,tags:["crypto"],solves:13,firstBlood:{teamId:"RedRocket",solveTime:1717155866626},extraData:{authors:["s1nn105"],connectUrl:"trapdoor.ctf.kitctf.de",files:[{name:"trapdoor.tar.gz",url:"/play/archive/trapdoor/a053f0f33932977546aa3e9720188e42cd8a1c6921ce95908f5f35766e2f53d6/trapdoor.tar.gz"}],imageUrl:"/archive/trapdoor/a053f0f33932977546aa3e9720188e42cd8a1c6921ce95908f5f35766e2f53d6/cover.png",previewDuration:10,previewStart:26,videoId:"Z9yBIQYc4hA"},solvedByMe:null},{id:"xz-safe",name:"XZ safe",description:`⚠️ Important: This challenge requires a special
setup to play! Please read the full description!

I heard that XZ was backdoored, so I replaced the
weird binary with a new test file. I hope it's not
backdoored again, because I have an SSHD running...

To play this challenge, you need to connect via SSH
instead of HTTP or raw TCP! Unfortunately, due to
SSH not supporting TLS, you need to use \`socat\` to
encrypt your traffic. The instancer will give you
an instance like \`xxx--xxx-1234.ctf.kitctf.de\`, and
you need to run this with your instance to connect:

\`\`\`bash
socat TCP-LISTEN:2222,fork OPENSSL:xxx--xxx-1234.ctf.kitctf.de:443
\`\`\`

Then you can connect with your SSH client to that 
port. And to make your life easier, you can use
these options to disable strict host checking:

\`\`\`bash
ssh -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -p 2222 root@localhost
\`\`\`

Also, you do *not* need a very powerful CPU/GPU
to solve this challenge! The intended solve is
done in under a second on my laptop, you do not
need excessive amounts of brute force to solve it.

Please be patient with the remote instances. It might take ~30 seconds for the challenge to be ready even after the instance is announced.
`,minPoints:50,maxPoints:500,points:500,tags:["rev"],solves:1,firstBlood:{teamId:"Platypwnies",solveTime:1717244048030},extraData:{authors:["13x1"],connectUrl:"xz-safe.ctf.kitctf.de",files:[{name:"xz-safe.tar.gz",url:"/play/archive/xz-safe/2289b71f33b1e2d5c4a6198f6c0957d296ffb1fcc7e2526f1cca1396a1ea5e45/xz-safe.tar.gz"}],imageUrl:"/archive/xz-safe/2289b71f33b1e2d5c4a6198f6c0957d296ffb1fcc7e2526f1cca1396a1ea5e45/cover.png",previewDuration:8,previewStart:0,videoId:"HCxJ4gAt2cs"},solvedByMe:null},{id:"insanity-check",name:"You know the GPNCTF{<full_text_without_newlines>} and so do I",description:`https://www.letras.com/rick-astley/2341/
`,minPoints:50,maxPoints:500,points:67,tags:["misc"],solves:172,firstBlood:{teamId:"The Few Chosen",solveTime:1717171547294},extraData:{authors:["KITCTF"],files:[],imageUrl:"/archive/insanity-check/018aa6a831a2f5a22024a146033c23221941b8f67c5dc4d707e7feed0a31ce44/cover.png",previewDuration:5,previewStart:120,videoId:"Y86-Acqrux4"},solvedByMe:null},{id:"sanity-check",name:"You know the rules and so do I",description:`Do you really?
`,minPoints:50,maxPoints:500,points:54,tags:["intro"],solves:547,firstBlood:{teamId:"welovepython<3",solveTime:1717149647073},extraData:{authors:["KITCTF"],files:[],imageUrl:"/archive/sanity-check/40df8c65c396a136c7753b8c60cc30aa7b4391b1a210d6464ddbaaf8c72af385/cover.png",previewDuration:10,previewStart:0,videoId:"dQw4w9WgXcQ"},solvedByMe:null},{id:"todo",name:"todo",description:`I made a JS API! Sadly I had no time to finish it :(
`,minPoints:50,maxPoints:500,points:77,tags:["web"],solves:119,firstBlood:{teamId:"L3ak",solveTime:1717150435588},extraData:{authors:["13x1"],connectUrl:"todo.ctf.kitctf.de",files:[{name:"todo.tar.gz",url:"/play/archive/todo/367dcf1a914d5d5e1731cee0c9d6c0b26f9d042fb673dde5efd14e53e64e1ff4/todo.tar.gz"}],imageUrl:"/archive/todo/367dcf1a914d5d5e1731cee0c9d6c0b26f9d042fb673dde5efd14e53e64e1ff4/cover.png",previewDuration:12,previewStart:0,videoId:"zeFdkj_Gvtc"},solvedByMe:null},{id:"todo-hard",name:"todo-hard",description:`I made a JS API! Sadly I had no time to finish it :(

But I had time to make it harder!
`,minPoints:50,maxPoints:500,points:176,tags:["web"],solves:27,firstBlood:{teamId:"L3ak",solveTime:1717237736467},extraData:{authors:["13x1"],connectUrl:"todo-hard.ctf.kitctf.de",files:[{name:"todo-hard.tar.gz",url:"/play/archive/todo-hard/a928dfff256456a5772430cb773dcb1948bbed694ccd76bd97f08dd9f9e24f1e/todo-hard.tar.gz"}],imageUrl:"/archive/todo-hard/a928dfff256456a5772430cb773dcb1948bbed694ccd76bd97f08dd9f9e24f1e/cover.png",previewDuration:12,previewStart:0,videoId:"zeFdkj_Gvtc"},solvedByMe:null}];export{e as default};
