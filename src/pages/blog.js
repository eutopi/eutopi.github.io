import React, { Component } from 'react'
import { Topbar } from './topbar'
import './main.css'

export class Blog extends Component {
    constructor(props) {
        super(props)
        this.state = {
            blogposts: [
                {
                    title: "City of memory",
                    date: "5/1/2023",
                    post: <span>I was back in the city where copper tinted the tiled roofs. Where cobbled roads that dug into my insoles stretched on for miles without respite. But this time, her waters were murkier, and her skies cloudier. She breathed in a different consistency of air perhaps. Or maybe the way she chose to cast her shadows was lengthier than she had used to do.<br></br><br></br>

                    The city of my memory remained a warmer hue. I remember cajoling birds in the summer heat. And vines choking each other in dances of frenzy. A jittery sensation each time I stepped off a bus. And someone kissed someone else somewhere, probably. Perhaps a sense of danger too.<br></br><br></br>
                    
                    But this time, when I peer outside at 3am, too many lights glare back like angry fireflies. The silence felt calm. Yet I could not fall asleep, and instead think about a city very much like this one. Where peddlers entice passersby with the aroma of ripe fruit. Or where sunsets lasted longer, and impressed their images onto the clear rivers below. Bickering ducks disrupt this reflection as they fight over the last morsel of bread tossed overboard. But the restless ripples fall still soon, and the river returns to grey—as dull as the irises of the peddlers returning home from a long day of work.</span>,
                },
                {
                    title: "Butterfly",
                    date: "5/16/2020",
                    post: <span>I finished my last class of undergrad recently. It was a little uneventful, a little boring. The professor spoke about the brightness of our futures, that there was no need to be sad for our parting despite the current times, though I don’t recall anyone on the Zoom call actually being sad. The wrong season, perhaps.<br></br><br></br>

                    Parting probably shares the same color as summer’s end instead: afternoon sunlight streaming through the leaves, a drawstring hat gently carried by the wind. There is a sense of loss here that I can’t seem to place, a certain notion of finality. Sometimes, I miss the lazy summer days where I sat by the windowsill and binged One Piece, the Percy Jackson series, <i>Twenty Thousand Leagues Under the Sea</i>.<br></br><br></br>
                    ​
                    Or maybe parting has the hue of trains. I remember the incredible sense of sadness I felt when I rewatched the scene when Chihiro boarded the train with No Face to find Zenibaba, accompanied by Joe Hisaishi’s beautiful “The sixth station.” Or the time Taichi and the gang waved goodbye as the train carried them back to the real world.<br></br><br></br>
                    
                    Perhaps parting is only sad in retrospect. It’s simply not the season yet.</span>,
                },
                {
                    title: "iii. dream of a lifetime, in acts of three",
                    date: "7/28/2019",
                    post: <span>One. A little delight—I found it in the piano sonata an old man was playing in the midst of a busy square next to the astronomical clock. He laced fairy lights around his keys, and I wanted to tell him it was obstructing his playing. But the soft glow wrapping around his sinewy fingers was so beautiful; despite closing my eyes, the afterimage I saw was accompanied by a thousand tiny blue fireflies.<br></br><br></br>

                    Two. Somewhere far away, there is a car speeding through a dark tunnel. The headlights are broken, and there is no way to see much of the road ahead. Next to me sits the personification of unease: a light peck on the lips, conveying memories of a story I do not know. I whisper to the driver to step on the gas pedal. He nods in response, and we race through astonished ghosts, who drop their picnic baskets in surprise.<br></br><br></br>
                    
                    ​Three. She dances in the middle of a vacant living room. With all her belongings packed, the apartment never felt so strange as it did now. She wonders if the next family to live in this space will be a happy one, whether they will own a dog or like to eat a late breakfast on Sundays. Her Agumon stickers still remain on the left wall by the kitchen counter, and before she shuts the door behind her, she tells him not to miss her so much, for he, too, will forget her soon.</span>,
                },
                {
                    title: "District vii, budapest, hungary",
                    date: "7/7/2019",
                    post: <span>There, I lived on the sixth floor of an old neo-Classical apartment, neatly nestled between two bookstores. The one to my immediate left upon exiting the complex offered a weekly rotation of discounted novellas in a language I could not read. Next to the entrance sat a small Euronet ATM—a tourist trap for the ones who didn’t know any better. The street ahead was noisy, a conglomerate of shouting and honks occasionally suspended by the cadence of the emergency sirens.<br></br><br></br>

                    The elevator ride up consisted of a narrow nine square feet platform, a full length mirror on one side, and wooden doors on the other that would open at the slightest touch, abruptly halting the ascent. It was a strange experience, for I could never decide how long that climb really took. When I was staring at myself in the mirror, trying to flatten that one stubborn strand of flyaway hair, it felt like mere seconds. Yet on the late nights when not even the heaviness of the walls surrounding me could make me feel safe in a foreign city 7000 kilometers away from home, the seconds felt like hours.<br></br><br></br>
                    
                    Upon entering through the wooden doors of the apartment, a sudden gust of wind would try to push you backwards. Perhaps this had to do with the particular arrangements of the windows—my flatmate and I always preferred to keep them open—or perhaps some ancient spirit was trying to keep strangers out. This was the urban legend my landlady told me when I first arrived, and I never asked her whether she was actually kidding or not. Maybe this explained why the sunlight cast through the windows would always be slightly tinted pink: a shy, gentle ghost.<br></br><br></br>
                    
                    ​My stay there wasn’t very long, only a mere four months, give or take a few days. I wasn’t particularly attached either, and bid it a light farewell on my last night. But sometimes, whenever I see a slightly chipped gargoyle statue, a wooden elevator, a fridge with a broken freezer door, I would think back to the old place, wondering whether the spirit there was lonely.</span>,
                },
                {
                    title: "164",
                    date: "2/6/2019",
                    post: <span>Someone once told me that whenever they purchased tickets to a place, they always had to book tickets away from that place, as if they did not belong anywhere, and this made them a little sad. I remember only halfheartedly consoling them at the time.<br></br><br></br>

                    If strictly going by number of years, I’d suppose the place I belong to would be the fourth brick establishment two avenues away from a busy train station, one partially obscured by a fifty-year-old oak. Upon entering, one would first notice the striking smell of some melange of herbs and ancient roots, a scent that seems to cling to me even now.<br></br><br></br>
                    
                    Whenever I return to the house, it was as if I was revisiting some earlier period in time. The walls of my room, in particular, are still adorned with watercolors, oils, and old concert posters from 2010. That was when my family first purchased the place, and as an eager sixth grader, I resolved then to make my room the very best that a child could ever own. It was an open exhibition of all my favorite things: the souvenir model of the first ship that sailed around the globe, a brass pocket watch with hands that rotated counterclockwise, a wonky paperweight of the Milky Way.<br></br><br></br>
                    
                    Yet as I grew older and these things gradually changed, I never really bothered with redecorating. And so, the past stuck to me like an adhesive, a cute little bandaid that is simultaneously endearing and uncomfortably restrictive. I think about tearing it off my skin, how much pain it would cause and how liberating it could be.<br></br><br></br>
                    
                    ​I think about how, in ten year’s time, I would like to buy a house with high ceilings near the sea. Not the kind next to busy beaches, but a more modest abode isolated enough that it is still socially acceptable to be a little aloof with family, yet one still fairly close to a local grocery to be convenient. A nice place where I can, at regular intervals, remind myself to redecorate minimally.</span>,
                },
                {
                    title: "Medium",
                    date: "2/3/2019",
                    post: <span>I touched chubby infant fingers today, and was reminded of the first time I held someone else’s hand. It was a cold, sticky sensation, like trying to catch eel barehanded on a winter’s day. I locked eyes with her, curious about her input on the topic, yet her large, black irises reflected nothing in particular.<br></br><br></br>

                    The second time was like the houseplant I kept, a small, quiet creature. It was a little gullible, so I would occasionally rotate its pot just to see how it would find the sun again. It was the perfect confidant, and I loved how picky it was about my singing: at the slight off-key note, its leaves would curl up in distaste, and at some point, this was the funniest thing in the world to me.<br></br><br></br>
                    
                    ​But on some days, I can’t figure out the right medium to describe these thoughts with. Something feels off, yet I have too much pride to scrap my own creations. And so I layer the attempts, first impossibly delicately, then hastily so. I call the final opus beautiful for its imperfection—isn’t this just the excuse everyone else uses?
                    </span>,
                },
                {
                    title: "137 am, windows",
                    date: "8/25/2018",
                    post: <span>This is a list of windows I liked.<br></br><br></br>

                    Through the first window, the initial phrase that came to mind was nostalgic sunlight. Not a personal nostalgia, but something much older than I. As it strikes the corners of the travel brochure someone left behind, the latter curls up a little, as if stretching after a late noon nap. It casts long shadows across my parents’ blue-tinted wedding photo. The image is newly dusted, though I don’t think my father has smiled so brightly on camera since. The date on the bottom reads 1989.<br></br><br></br>
                    
                    It was always a gamble, whether that second window would close properly. Perhaps it was something more than RNG that rendered it open when I screamed fuck you at some poor passerby taking a stroll that night. Or sometimes it would be closed so that we can still sing songs, written by other people, for other people. Those hours were a little chaotic, but nice. Yakult drinks were nice. The squid snacks were nice.<br></br><br></br>
                    
                    ​The third window was never really cleaned properly. When someone says New York City, it is always about the brilliant, bold things they meticulously polished, rehearsed a thousand times in front of a mirror only to drink away at some dimly-lit bar one September night. It is never the quiet, forgettable things, musings that ease up their scrunched eyebrows as they rest their heads for a short respite. But I tell myself that sometimes, this dirty window is kind. Sometimes, when the scenery outside is dark and I am the only person on this train, the lights across my city cast through this murky veil look like fireflies.
                    </span>,
                },
                {
                    title: "Too much and too little",
                    date: "7/15/2018",
                    post: <span>i. I like a yellow that is neither too bright nor too dark, a kind of transparent mustard, the murky sort of sunlight cast through sullied stained glass onto fragrant wooden floors. Not the floors that surround me right now—these have been owned by too many strangers. No, I am talking about the ones back home: red cedar planks that creak when you step on them, echoing the weight of your own existence. You jump up and down in attempts to amplify the sounds, and your mother shouts from downstairs to quit fooling around and come down for dinner.<br></br><br></br>

                    ii. In this sense, my mother’s love is too much: the steady stream of WeChat links detailing everything from “How to Get into Top CS Grad Schools” to “The Secret to Happiness,” pulled from suspiciously sourced Chinese websites. The ringing of newly dusted wind chimes and the aroma of sun-baked sheets whenever I arrive home from a long semester. I never did say thank you. I still remember that time in fifth grade when she sat me down on a park bench and spoke about honesty and the weight of words. When she finally kissed me goodbye and said “I love you,” I heeded her teachings and replied with a “I don’t know what love is, so I don’t know if I love you.” And now whenever she tells me “I love you,” I instinctively answer “I love you too” because I hate to see her cry. <br></br><br></br>
                    ​
                    iii. Too is too easy a word to say. The number of people who enjoy both Beach House and Yoga Lin is too little, so you cry a little too.
                    </span>,
                },
                {
                    title: "Desert walk",
                    date: "6/6/2018",
                    post: <span>A spoon fully submerged in fluid radiates a rich crimson. Someone raises it to the light and the metallic glows golden, a spring green, iridescent for only a few seconds before disappearing into an open mouth. He thinks of this fragile pool of liquid as the miniature of all the oceans he never saw. He swallows purposefully, his limp body now an oasis.<br></br><br></br>

                    He does not mean the physical bodies of water, what with all its impurities: a faint smell of brine, the game of entropy light likes to play, not daring to touch the same place twice. Rather, he looks for the sea that comes to him at sleep, an ancient, lethargic thing. On its back rests a once glorious civilization that has now decayed, slowly swallowed itself.<br></br><br></br>
                    
                    A long time ago, someone once spoke eagerly to him about these waters, tempting him with its compassion to engulf everything a person could possibly feel. But in the end, this thing we call sea remains in the realm of myths, and he continues trudging through miles of sand, specks of which obscure his vision.
                    </span>,
                },
                {
                    title: "Captain’s log",
                    date: "6/6/2018",
                    post: <span>On this boat, my world is tied to sea, humanly, invariably so: haddock with their glistening skins mitigating tonight’s need for olive oil, lingering horizons as foil for a stupid sentimental post, seagull songs that remind me of off-key melodies sung in the shower, reminiscent of ports I’ve never been. But this is unnatural interpretation.<br></br><br></br>

                    Take two. A world where red shells line rooftops for miles. They function as a canopy for this quaint little town, devoid of history and more mundane than anywhere else. Caricatures of living things just like us are stationed at the doors of each house, inflated with exaggerated expressions of happiness: still-life on a tourist brochure. I snap a picture for the sweaty fat lady next to us. Posing next to the caricature, the two figures could be sisters. The lady thanks me, and I notice that she draws in her smile lines, remnants of which are now oozing down her flushed cheeks.<br></br><br></br>
                    
                    A stranger world still. I drink peppermint tea for the first time in months and the wisps rising from the cup swirl in a way clouds never would. I mimic their dance routine with my index finger, pretending that the birds above are performing elaborate tricks at my instruction. But they dive headlong into the waters below instead, and I wonder if it is just a mere coincidence, that sky has the same hue as sea.<br></br><br></br>
                    
                    Cobblestone roads that make my feet ache: rocks from different oceans, different stories. When they were once conch shells, people from all over the world used to bring them close to their lips, whispering secrets. Now, these voices are carried away by the wind, escaping through the crevices of glass. Someone stifles them by closing the window.
                    </span>,
                },
                {
                    title: "Parting letters",
                    date: "5/17/2018",
                    post: <span>The first half mint chocolate chip, the second half salty caramel. No one cares about the constellations again tonight, especially when a particularly bright airplane mimics too closely the trails of a shooting star. You point your index finger at it—see, it’s an overrated movie! This is absolutely and thoroughly not intended to be vague.<br></br><br></br>

                    I am petty, get angry quite easily, but I do not like to think that I am a sensitive person. You tell me you are not writing parting letters to people you will see again, but I tell you my attachments do not lie with people. The fuck is a person? Ten years from now, I bet you would stop wearing Abercrombie&Fitch. So instead, this is a placebo, an elegy to memories in your stead:<br></br><br></br>
                    
                    i. cai hong — a song associated with the immense difficulty to prop up a stupid phone so that it would record properly, warm Paresky sunlight.
                    ii. neon kowloon. In which I discover my love for turtle jelly is almost as great as your love for pineapple cake. Almost.
                    iii. 4loko? Everyone is drunk or high or probably both. Thank you for the yakult drinks and lending me your windowsill.<br></br><br></br>
                    
                    And hey, I do like the way you sing, my dude.
                    </span>,
                },
                {
                    title: "It's May but hello where is my spring",
                    date: "5/10/2018",
                    post: <span>A list of things that still bother me: the occasional irritation these words bring, your lack of responsibility, my lack of sleep. When I was still a child, I saw pictures of the sea before I saw the sea properly. I remember being disappointed—it was so painfully mundane. These embellished photos, selling at fifty cents apiece, are feeding whose economy? To overcompensate, I told you that we should travel around the world someday, only separately, and you humored me.<br></br><br></br>

                    I tell my friends that I escape a lot. I guess that, too, is another betrayal of responsibility. The multicolored pixels flashing across this tiny screen are kind of comforting, one of repetition. They remind me of more familiar scenes, like the way seasons in this town like to imitate each other. Or the way your prose is always pithy. But this is yet another example of subjectivity. The way my mother calls me every Sunday morning is a pattern as well, and sometimes, I pretend to be asleep.<br></br><br></br>
                    
                    ​But year two was a quiet, little thing. The kind of quiet found nestled between retired dust bunnies and seaweed cracker bits on a Saturday night. A warm breeze outside rustles the new oak leaves and your memory drifts to something sweet.
                    </span>,
                },
                {
                    title: "4:20 is prime time to love",
                    date: "3/21/2018",
                    post: <span><i>This is not my story but I would like to live vicariously.</i> Half a lifelong romance: a quiet, solitary one would be nice, one of idealisms and happy ghosts. Instead, all you do is run around in circles, reaffirming the hedgehog’s dilemma until bone finally rattles against bone. This is not an uncommon phenomenon, however. The people who raised you also grew up blaming each other.<br></br><br></br>

                    <i>Alternatively, the universe is so much easier to love.</i> It is a common cliche: ridiculous allure in the mysterious, dark, and brooding. Your first crush was a cumulonimbus at dusk. You next fell for the idea of how galaxies died. Being fickle, you then found beauty in the depths of a soundless deep sea, oversaturated with bioluminescent flora. But there is no happiness in any of that. For the sake of convenience, you might as well just point to a nearby shrub and designate that as your God.<br></br><br></br>
                    ​
                    <i>But my conscience tells me loving things instead of people is escapism.</i> A gentle rejection of responsibility, similar to the way people around you reject pineapples on pizza. But habit is not the reason why you substituted nihilism for absurdism. Don’t go dyin’ in a stranger’s apartment somewhere now, you’re gonna have to carry that weight.
                    </span>,
                },
                {
                    title: "Sadistic summer",
                    date: "3/15/2018",
                    post: <span>i. The texture of rope in this tug-of-war dictates my idiosyncrasies. Half a year has gone by now, but I sometimes still let the hardened flax dig into my skin so they may form calluses already. A worthy distraction, but I was raised sheltered. Summers spent in a small corner of the bedroom where pixelations mimicked a delicate script. They took me to obligatory vows before I learned how to reason properly.<br></br><br></br>

                    ii. I think about a hurricane somewhere. It drowns the fishermen to feed the fish. There is grace in the way their bodies were dragged from shore—a gentle maneuver on whose part? It is a shame I already knew how to swim.<br></br><br></br>
                    
                    iii. A list of things that are not romanticized in memory: ambient music that does not complement the mood, a slow disregard for unsanitary windowsills, a stupid water boiler.<br></br><br></br>
                    
                    ​iv. I’m probably crueler than you think. Even my mother tells me this. The same waves wash over me and I am no longer interested in your stories. Pillow talk is how you reveal your insecurities, but neither of us were kind listeners. Tonight, there must be some other incentive to dream: the promise of another mindless summer, a lack of jurisdiction for our depraved vagaries. There is an easier way to settle into this image, but the neighbors do not stop whispering sweet somethings.
                    </span>,
                },
                {
                    title: "Horizon organic milk 2.0",
                    date: "12/18/2017",
                    post: <span>Tension on the G string is a soft, onerous sound. Like an aged mule, wailing. I dig into the rosin because I do not practice quite enough. And the difference between my fingers and this strange piece of wood is how a person who lives aimlessly in the present greets another who lives aimlessly in the past. I am hurt by this revelation of course, but I take it as my responsibility to tame it.<br></br><br></br>

                    Someone drops ten thousand dollars for a booth somewhere, and they spend the night swaying in the dark. They close their eyes and see flashes of neon, but that is only a relic that does not complement the surrounding ostentatious pastels. There is a pattern here that we have interrupted. Let us leave quietly for now.<br></br><br></br>
                    
                    ​I have a pattern too. Like the way I forget how to implement merge sort but I remember the way you peel your oranges. Nails digging into the apex at O(n log(n)). Your tongue sours. An unsavory commentary on normalities only reinforced by the pervasion of habit. Foreign slurs and alien wares. In an empty apartment, there is a goofy lad who sets his expiration date to that of canned pineapples. I promise you this is only a coincidence. He does not even like fruit.
                    </span>,
                },
                {
                    title: "The fin.",
                    date: "12/9/2017",
                    post: <span>The night air must have brought something to me. The top of my right cheek burns saline and light. Hydration is recommended anywhere, but that’s a little unfair. Do you remember how the squirrels get fat before they die. That was a time when my eyes were still occupied.<br></br><br></br>

                    I put up lights not because I miss home, but because I miss the notion of being home.<br></br><br></br>
                    
                    ​This is a state of synthesized high. My guilty pleasures include replaying my own snap stories and sipping Horizon Organic milk at midnight. There is always a self-appropriated refrain between ordinary calm and moods like tonight. We talk shit sometimes.
                    </span>,
                },
                {
                    title: "As praxis",
                    date: "10/22/2017",
                    post: <span>There is an irony in the way we should hold conversation: interruptions at timed intervals, a lingering politeness, noninvasive rhetoric. This awkwardness should be kind of nice: a pleasant diversion in lieu of denser topics. It was supposed to be a secret that I hesitated before the words I wish to say. Yet, this peppermint left my mouth burning. It does not stimulate, only coerce a more muted means of expression. Maybe I speak a little bit louder now. I am not too fond of this. I think about how ridiculous it is that people enjoy spicy cuisine. You, too, probably think I am ridiculous.<br></br><br></br>

                    There is a large housefly trapped between the glass window and the mesh screen. It should die of asphyxiation by tomorrow morning. But tonight, the buzzing is consoling.<br></br><br></br>
                    
                    The places we visit in imitation lucidity are far too practical for comfort. The smarter alternative is to wake up. Or go for a swim with birds. But these options do not coincide with your outdated philosophies. I sometimes wish we were less sensitive people, so I can still feign the sweet allusion of formality. What were we talking about again? Oh, I remember now. The way you cope with an uncomfortable situation is lethargic reasoning. But our very discourse right now stems from logical fallacies.<br></br><br></br>
                    
                    ​Huh? My room is silent now. Right, misplaced irony. Someone more passionate should prove the existence of forgetting.
                    </span>,
                },
                {
                    title: "Honorable sacrifice",
                    date: "9/12/2017",
                    post: <span>A shorthand for filial piety, its more outspoken cousin. The way I wished my great-uncle 身体健康 and 万事如意 because he was the brother of the mother of my mother but he did not cry the way my mother did at my grandmother's funeral. We memorized lists of 成语, recited them by habit during the New Years as a mode of currency—my fourth cousin was always the one most clever with words. I usually leave with seven to eight red envelopes, primarily stuffed with the faces of Abraham Lincoln. Unlucky. I learned pronunciation before meaning. Funny because mimes in the same play should have no reason to compete for best actor. I think about the people who loved me. The things I owed them.<br></br><br></br>

                    ​Confessions: "You will understand when you are older. I am not willing to die for your mother, but I can die for you," my father once told me at age fourteen. I remember feeling an acute sense of pity—both for my mother and the me who may become a mother. I remember replying, "Me too." I think I wept that night; the prospects of dying were far too scary. But I suppose the philosophy of love is sacrifice has its own allures: 问世间情为何物 直教人生死相许. A cliché and a beautiful story.
                    </span>,
                },
                {
                    title: "Short hair",
                    date: "9/1/2017",
                    post: <span>Don’t take her seriously because she reads stories saturated with ambiguous sexuality: absolutely improper. There is a confusion in the space where she used to play with her dark strands, fried from hydrogen peroxide. A nervous habit. The scissors are stainless steel—a stranger’s eyes stare back tentatively. Her neck feels cold sometimes but she prefers staying indoors to wearing turtlenecks. Maybe sensitivity is just a measure of mood: how eager are you to chew at boundaries. She is not sure she likes this. Someone reminds her that it is unwise to miss a person this much, so she cuts her sentiments. There must be more direct ways to satiate this hunger: a curiosity for hedonism, an accommodating appetite. Doctors would advise against the consumption of saline—tears and saliva remain distinct. But discontent can still be heard bubbling under layers of skin. They threaten to penetrate.
                    </span>,
                },
                {
                    title: "This is a love poem",
                    date: "8/26/2017",
                    post: <span>Cautiously experimental. A tune you hum to yourself while tucking in your shoes. Today is an ordinary day filled with ordinary sounds: the faint rustling of leaves, the exchange of war cries between crickets and cicadas. Only if the melody from my speakers once belonged to a sparrow—maybe then can I understand.<br></br><br></br>

                    Someone hand-washes her grandmother’s floral blouses, aged seven years and going. The new ones are neatly stashed in a suitcase somewhere. But she tells her granddaughter to not be afraid; she does not plan on leaving anytime soon. The child who grips her grandmother’s hands thinks of her calluses as natural. She stares into her cloudy eyes but only dreams of her own adventures in the rom she newly purchased for her Gameboy Advance. Her grandmother tells her to marry early but fall in love late but she grows up watching everyone around her.<br></br><br></br>
                    
                    In middle school, a boy tells a girl that he likes her smile but the girl tells him that she does not really like to smile. Instead, her favorite expressions are smirk, derp and gasp because they were more fun to make. He promises her wonders but she prefers the monotony running through her blood: black hair and black eyes. The girl tells the boy in the next class that she likes his smile. He tells her that he prefers girls with eyes that light up with wonder. In high school, the girl dyes her hair.<br></br><br></br>
                    
                    ​This is the apotheosis of retrospective narrative. She paints a blank wall in sedated differences. She makes a needlessly boring observation sometimes: eureka! In this picture, her grandmother walks a step ahead of her grandfather—that, too, is another interpretation.
                    </span>,
                },
                {
                    title: "Composition",
                    date: "8/7/2017",
                    post: <span>i. A flamboyant character in garish attire tells the story of a starving man, stranded at sea, who cried over the fish he was forced to kill. A beautiful Arowana, king of the waters. When the starving man caught the same fish again, he would not be able to differentiate between his own tears and mere stretches of brine.<br></br><br></br>

                    ii. I store in a conch shell the elegy to my idealism. Key set in B minor. On windy days, it echoes some vague notion of someone who was once more merciful.<br></br><br></br>
                    
                    iii. This is neither a story of hero complexes nor an allegory of conditioning. I thought forgoing this thing they call expectation would make me a kinder person. But I realize that even my nightmares are idyllic in nature. I visit them on sad nights, happy nights, drunken nights alike, before settling back into gradients of wakefulness.<br></br><br></br>
                    
                    And this distinction is probably cruel. That is, the dreamverse governed by my ideals can only be populated by marionettes donning the faces of people I know. They do not speak about themselves. Or the things they like. The way they sip their afternoon tea. Someone wearing my face plays a supporting role in someone else's noir movie. There is no ticket guaranteeing passage from one theatre to the next. The parasitic cycle is karma. We all play fools, pretend this little box is soundproof—paper orchestra, paper symphonies. But my ears are as poor as my eyesight. I sometimes pick up the old conch shell and still hear a song of gratitude.
                    </span>,
                },
                {
                    title: "年",
                    date: "8/5/2017",
                    post: <span><i>year one</i> said I was weaker than I thought. That the things I thought myself immune to kept me awake at night. That I favored the concept of reheating cold fish. It actually makes no difference, whether you reheat it or not—the aftertaste remains the same: fishy. Either way, I do not mind. I think about someone else's ocean.<br></br><br></br>

                    Someone's promises were made here: a town of borrowed ghosts. When the number of vows outnumber the number of inhabitants, they are auctioned off the next day at noon: sometimes dirt cheap, other times worth a pretty penny. Adults claim this is only a fad, a passing breeze leading from one pier to the next. But piers echo themselves and I am an adult. My friends wait on piers of different shores. The figure of a young sailor blocks them from my view. He directs his gaze towards the waters and does not lower his head to inspect the quality of wood supporting his thin frame. To hell with your sea.<br></br><br></br>
                    
                    Someone hums an old nursery rhyme. They are jovial but off-tune. We do not tell them the song's origins. As I raise my glass, toast to someone's birthday, I notice that my breath smells of coconut. A memory of days I was too happy to stop and record mingled with the hazy notion of growing things: moss on yellowed photographia. An infestation easily controlled by the bravery to light a single match. But the roots are invisible to the eye. They thrive.<br></br><br></br>
                    
                    <i>year two</i> says I will be brave.<br></br>
                    <i>year three</i> sleeps.<br></br>
                    <i>​year four</i> will remember softly.
                    </span>,
                },
                {
                    title: "Simple & clean",
                    date: "7/28/2017",
                    post: <span>is a good song. When will Kingdom Hearts 3 come out? Who knows? I digress.<br></br><br></br>

                    ​Someone told me to use simple words. I can prove to you that I am a simple person. Please burn the dictionary in your hands—it has no meaning. We can restrict the English language to two hundred words instead. The rest is too heavy for me to carry. We are neither too late nor too early, only walking in circles: a slow Fibonacci.<br></br><br></br>
                    
                    I can tell you my life story in simple words too.<br></br>
                    Long ago, there was a sea. And then there wasn’t. Ah, a tragedy.<br></br><br></br>
                    
                    Let me try again.<br></br>
                    There is a contradiction between what is natural and what is not. The euphemism for that is human. But it is so sad to think that androids cannot make flowers bloom. No one remembers the time capsule from some uneventful summer’s day. The rust on the small machine understands. It waits for no one.<br></br><br></br>
                    
                    Three is cliché.<br></br>
                    I make friends easily. I share my secrets easily. Yes, the fourth wall is broken. But that does not make you special. Who cares if you believe in special relativity. I am like a snail—I lose myself in the places I choose to bury. Snails do not have spinal cords nor brains. They forget easily.<br></br><br></br>
                    
                    The afterword.<br></br>
                    Dear internet stranger: thank you for liking my smile.
                    </span>,
                },
                {
                    title: "Yesterday",
                    date: "7/27/2017",
                    post: <span>It is like inflating a helium balloon: bright red exterior, invisible traces of blood, a word caught somewhere down your esophagus. Aspiration is a possibility, so you down it with herbal remedies and end up with a sore throat instead. Desire is also biology. But I did not fear because I thought myself immune to the embellishments of memory.<br></br><br></br>

                    And fear is a strong word, something only carelessly exchanged for currency by people who watch horror movies on rainy days. It is not the fear of diving into a deep ocean—they call that kind of hypothermia curiosity. This is a cold more akin to dry ice burns: when you chase away the smoky wisps under the tap, there remains a thin layer of unease. Like a filter over the camera lens, it lingers and obscures. Cinematographers call that beauty. A psychoanalysis: when staring into the mirror without corrective lenses, the blemishes on your face are concealed from view, so you like to observe the world with blurry vision as well.<br></br><br></br>
                    
                    ​A convenience that developed into habit. You only want to cry when there is a pillow to catch the tears. I can water your flowers for you, but that does not prevent me from killing them. Maybe they are better than me at handling saline. This is not out of spite, as you are a kind person who can both envy Hamlet and hate Shakespeare—all the world’s not a stage if people are more sincere to one another. But I am a better actor now. We both grew up that day.
                    </span>,
                },
                {
                    title: "On distractions",
                    date: "7/8/2017",
                    post: <span>Sometimes, I complain of neighbors who blast IDM past midnight. But I am always in the mood to make friends. A drunkard—or is he high?—outside speaks to his old chum about an opportunity foiled by conspiracy theories. About a long distance lover and a sibling he used to take long walks with. I guess I am also enamored with nostalgia. And the remnant smell of isoflurane reminds me of words from childhood. The way I was selfishly taught not to be selfish. The way my father tells me that love is obligation and I do not like to owe people.<br></br><br></br>

                    A cheap passing musing. I used to believe that I was good at reading others. Fakedeep. I can’t tell what you’re thinking, so please let me listen:<br></br><br></br>
                    
                    i. his presence is comforting, akin to pi pa gao. Makes me feel at ease and a bit like singing. Here is the rest stop I choose to get off at whenever the train ride makes me queasy. The interlude being too consoling, I often doze off. But sleep is negligence and I too am guilty of egotism. I was so happy when he told me rest stops needed care and maintenance as well. Here, a memory of the Orbis theme, accompanied by some arbitrary arrangement of stars we insisted were constellations, is set on perpetual replay. A memory of a conversation about alcohol and water.<br></br><br></br>
                    
                    ii. your sporadicity is my sweet addiction. But it is all a meticulously calculated algorithm: pray to rngesus and pretend that luck is classical conditioning. Thank you for some days. No thank you for all the others. I make excuses, try to superimpose ideologies and complexes onto you.<br></br><br></br>
                    
                    iii. this is the story of a friend of a friend. Where chill became an euphemism for coping mechanism. Truly unfortunate (and not in the sarcastic way).<br></br><br></br>
                    
                    ​The Mamas & The Papas’ <i>California Dreamin’</i> is now playing outside, so I am a little less inclined to raise a noise complaint. There are miniature green winged creatures crawling next to me, their tiny cries increasingly drowned out by the music.
                    </span>,
                },
                {
                    title: "Elephant haze",
                    date: "6/23/2017",
                    post: <span>I can tell you about the way I love elephant skin. The way I prefer smile lines and willowy hands. Or how I like to watch decay. The aesthetics of dilapidated buildings and abandoned train cars, riddled with overgrowth. But this is hypocrisy, a pretentious pity that no one wants. Or deserves. The art of living vicariously in a world where we learn cogito ergo sum in elementary school. A precocious kid with an existential crisis—laughable.<br></br><br></br>

                    Let me liken you to elephants. A wish to become more thick-skinned. To carry on your back the weight of a dynasty and still play in puddles after rainy days. Whenever it showers, my kitchen is crawling with ants. I kill them so they do not contaminate the sponge cake sitting on the dining table. I do not always apologize; they call this second nature. So what is first nature—surely it has nothing to do with me. I do not even remember the first word I spoke.<br></br><br></br>
                    
                    ​But there are no elephants in the city. I am not talking about those sad imitations locked behind metal bars, reinforced with sustenance to dance for children. A pretty glass menagerie. A carefully curated array of specimen referred to by academia as my generation. But we all know it's a farce. It's like social media, the way I plaster my smiling face all over my snap story for that one person to gauge my happiness. The way people do not cry in front of others. No, I am talking about the elephants that live in memory. The lazy glow of street lights on a foggy day. The colors you told me you liked. All forgettable.
                    </span>,
                },
                {
                    title: "Express train",
                    date: "6/15/2017",
                    post: <span>There is segregation in this passenger car. The watchers watch the sleepers while the sleepers dream of the watchers. Though this is not parity—the watchers feign superiority as they tread upon the more purposeful side of the boundary. I think about opening my eyes, but it is counterintuitive to lie to yourself when you lie to so many others already. Uptown houses monsters; downtown you may find security.<br></br><br></br>

                    But he falls under neither category. His eyes are open, yet they do not see. Instead, they stare headlong into the murky blackness, trying to understand why he can read the words "this side out" printed on bulletproof glass. Where is in and where is out? A faulty installation. A day's toils easily relieved by a moment of tomfoolery—the thought of two dumb kids dancing in the dark. The light at the end of some tunnel is cliché, the mirage of midnight movies and songs set on perpetual replay. Both narrate the allure of prospects, yet this tunnel merely leads to the next stop. There is light everywhere. I follow his gaze, but he does not permit me entry into his private sanctuary. Perhaps he is thinking about the state of the universe. Or perhaps he is thinking about the apple he had for lunch.<br></br><br></br>
                    
                    ​The voice from the intercom, a little robotic, reminds him too much of his mother. The last time he called her was four months ago. Once he aces his interview, he will buy her a summer house, invest in an android caretaker so that she can live more comfortably. There is a future for artificial intelligence yet, but it probably isn't today. The man next to me coughs and smells of something herbal. I wonder if he is willing to share if I ask nicely.
                    </span>,
                },
                {
                    title: "By the sea",
                    date: "6/4/2017",
                    post: <span>An old fisherman hums a sea shanty that you remember from your childhood. The lyrics derive from words you cannot quite place, but you recall the image of whaling ships, the flicker of lighthouses, a lone yacht hat drifting in the breeze. You commend yourself for your own imagination, for this tune never belonged to you—you are a mere trespasser in disguise. But lethargic summer afternoons are ideal for storytelling, so you concoct a tale narrating its origins.<br></br><br></br>

                    There was once an old man who lived by the sea. Once upon a time, he had a nice girl and a nice job, but lost both of them to the waters. He grew to loathe the sea—such a whimsical yet apathetic entity completely detached from the affairs of man—how arrogant indeed! He ultimately decided to take his own life, throwing himself into the waters. After the man took his last breath, the sea lost its voice: the seagulls ceased to sing, the waves fell as still as a mirror. For unbeknowst to him, the sea loved the old man, watched him grow from a small boy fascinated with jellyfish to a strong man resolved to protect the waters from oil tankers. So this particular sea never sang again. Instead, curious visitors sang in its stead, invented a sea shanty about an old man who once lived by the sea.<br></br><br></br>
                    
                    ​And a large part of my childhood was probably subject to similar fabrications as well. But I would never know, since I would not be returning to that lone shore by the sea anytime soon. 
                    </span>,
                },
                {
                    title: "An unfamiliar ceiling",
                    date: "5/22/2017",
                    post: <span>I do not recognize the wooden ceiling fan rotating above me—it’s not even quite summer yet. The paintings I painstakingly tacked onto my walls are peeling off at the edges and I do not think of them much. 144 miles away from here, there is a room on the fourth floor of some beaten building that dons blank walls instead, yellowed from age. Someone furiously scribbles equations down. Two toothbrushes sit side-by-side in a shower caddy somewhere, waiting for dusk.<br></br><br></br>

                    And I really liked the way he used to make tea, nonchalantly dumping the remaining leaves onto the windowsill. There is a soft resting place for decay here, masked by stubborn bravado. I take heed not to disturb this gentle state of stasis, perhaps out of consideration—an euphemism for fear. But fear is irrational, a solitary red flag perched upon some lonely hill that is ideal for sharing secrets. Though there is no need to do so anymore. Once the curtains are drawn, we lose urgency to speak through our mouths. A sad, mild addiction: the passing allergy to pollen, the sudden desire to find an air chrysalis. I am not kind, so I wish mornings can be kinder. So that he can breathe more easily. <br></br><br></br>
                    
                    ​But this is not my story. Long ago, I joked about the tangibility of happiness. I realize that I really meant consistency, that the things I love have nothing to do with things that make me happy. I can condition myself to love the ceiling fan too—quite the mundane response to mundane practicalities. And even without it, the ceiling would appear as unfamiliar, a mere relic from a stranger’s dream. It is raining today as well and there is no need to depart from these four walls. There is a bitter aftertaste somewhere, but the tongue records that as sweet. 
                    </span>,
                },
                {
                    title: "Sound of rain",
                    date: "5/6/2017",
                    post: <span>Yesterday, someone asked me to differentiate between 开心 and 快乐. I went by the textbook definition and avoided rumination. Today, I coordinate my mood with the turbulent weather. The sky is overcast and repeats itself in nuances of grey. My friend tells me that melancholy is aesthetic—I am inclined to agree. There is laughter down the hallway and I think about the persistence of memory. Not the painting. I wonder if I am an optimistic person. <br></br><br></br>

                    But it does not matter. Years are carved somewhere deep in this building, yet we complain of square feet. There is a faint smell of freshly cut grass—it is really the smell of death. Something is dying now, probably. But the newly pirated game in front of me offers escapism, so I pretend that something is being created instead. By definition, pathological lies are easy to believe. They are like the way my mother teaches me to love the abacus. Or the way my father lectures me on responsibility.<br></br><br></br>
                    
                    ​There are pills in the trash can. Tax dollars spent unwisely. It is funny how adamant we are in altering our biologies. The body is a prison, poets like to say. But freedom without purpose feels more like boredom. So preach about the possibilities of Asimov’s singularity another day. I repeat the same monotonous cycles out of habit again and tell myself tomorrow will not be the same. But no one really bothers to measure the cadence of rain. 
                    </span>,
                },
                {
                    title: "Taciturn galaxies",
                    date: "4/30/2017",
                    post: <span>When my mother says <i>don’t be swayed by your friends’ opinions—they don’t understand you</i>, she really means <i>only listen to me—I know what is good for you</i>. We exchange euphemisms we already know the substitutes for to kill time. Sometimes, we have too much time. And profanities produced during periods of inebriation are what we both truly think, but we deny them all the same. <br></br><br></br>

                    Long walks at midnight are nice. Let’s have an impromptu rendezvous. Only in a small town called Williamstown, Massachusetts can the stars assume this particular configuration. But it is pointless to read too much into the stars; they have long perished eons ago. We only borrow their existences to suffice a topic of conversation, pretending too hard to be romantics. There is probably something profound lurking beyond that trail of smoke rising from our breaths, but for subscribers of instant gratification, patience is never a virtue.<br></br><br></br>
                    
                    ​And you don’t understand me. You don’t really have to. 
                    </span>,
                },
                {
                    title: "Balancing toy",
                    date: "4/27/2017",
                    post: <span>If performer at the Big Apple Circus was a viable career path, I would opt for the tightrope walker. Point taken, I would probably be a terrible one, but that's the joke. Sardonic humor. Balance is a joke, a concept carelessly brandished by a pretentious Zen practice guide written by some rich white dude. Preach to me about the freedom you artfully weave into your pragmatism instead, and I can pretend to listen.<br></br><br></br>

                    On rainy days, I prefer gales to wind lulls. Forget about umbrellas—sometimes, human innovation is deprivation. My idealism is most likely larger than your ego is willing to admit, so I only love conditionally. I hate parts of you, but that is really no different from infatuation with the rest of you. Maybe it's because I learned how to swim by first learning how to drown.<br></br><br></br>
                    
                    ​But if you were to speak about water, I would understand. I return to the sea because I like watching the ebbing and flowing of the tides. They bring gifts sometimes: a message-in-a-bottle that never found its recipient, remnants of someone's promise to someone else, a piece of seaweed, a little salt. I mimic fascination and concordance so the balance would not topple. Especially since fickle waters do not hold vows properly.
                    </span>,
                },
                {
                    title: "Tangerine trees, marmalade skies",
                    date: "3/24/2017",
                    post: <span>I locked hands with someone. Watched as our fingers withered to ivory bones from which willow branches sprouted. Our grandparents’ hands. Sinewy legacies intertwined in young folly. <br></br><br></br>

                    The black and white stripes of my shirt stretched into thin rivers of the galaxy, each the microcosm of adjacent parallel worlds. Happy endings. Sad endings. Both thrived in harmony.<br></br><br></br>
                    
                    The creation of Earth condensed into a singular species. Homo sapiens. What a silly word that did not roll off the tongue quite the right way. A pigeon looked me in the eye and chirped, “We are not <i>heliocentric</i>. Only <i>anthropocentric</i>.”<br></br><br></br>
                    
                    I saw a friend’s God somewhere. He donned a business suit and harnessed an elephant’s head to breathe more deeply. Quite the elegant strategy.<br></br><br></br>
                    
                    The way I counted stars was different from how they counted their planets. The little prince would not be returning to his rose today. But plants watered themselves when devoid of expectations. That was how we matured. Me and you and everyone else.<br></br><br></br>
                    
                    ​But it all returns to a center of gravity. Anchor my ship to your boundless sea. Tell me ghost stories so that I may dream again someday.
                    </span>,
                },
                {
                    title: "Dear mori boy",
                    date: "3/22/2017",
                    post: <span>Sometimes, I think about a quiet night in the woods. I walk around with no particular destination in mind and I lend my ears to the rustling leaves. Stars that are most definitely not moons linger overhead and I pretend to name some patterns arbitrarily selected from my limited knowledge of constellations. Deneb. Altair. Vega. I run out already. Some elusive Spitz song plays in the background and the figure in front of me hums to the tune with imperfect pitch. The figure is always a boy with a toothy grin because I am not creative enough to envision alternatives. He dons a plaited scarf, wool slacks, and an oversized linen duffle coat, everything in earthy tones of ochre and olive green. <br></br><br></br>

                    A friend asks me whether dress really matters. In the end, of course not. You will like an uncouth bum with three-day-old hair and the atrocious combination of white sports socks and slippers if you like that person, but the way one carries him or herself is telling of personal aesthetics. It’s like reaching for the same book out of a hundred others in a library. Or having a mutual art crush that leads to an art trade. Perhaps, when I am feeling especially cheesy one lazy Spring morning, I suddenly have the urge to paint a watercolor of us, but only restricting myself to my favorite colors. See? Accessibility. Pardon my selfishness.<br></br><br></br>
                    
                    ​There’s a comforting sorrow in earthy hues, like the haziness one experiences upon waking from a long dream. Sometimes, they call the sadness idealization. So when you meet a complementary ideology, is your heart not filled with some inexplicable joy? Perhaps they will also be a Piscean INFP. Wait, narcissism? What? 
                    </span>,
                },
                {
                    title: "ii. dream of the cat alley",
                    date: "3/20/2017",
                    post: <span>I had a dream of a hairless Sphynx. It stood up on two feet and guarded the door behind which monsters were said to reside. There is one in each household but any reckless soul would understand that the door does not hide chimeras, but only a certain passageway ruled by cats. Pay the toll of two fish to pass and you are a guaranteed safe journey—teleportations per second dependent on the specific breed of cat unique to your address—to your desired destination. You can also choose not to pay two fish, if you are so inclined. The cats will merely nod in acknowledgement and suck out your soul in exchange, no big deal. This is the fastest way of door-to-door travel, at a steep price. <br></br><br></br>

                    Sometimes, the cats will grow lethargic en route and sporadically stop in the middle of the road—they are firm proponents of instant gratification, after all. During this brief period, the traveler must not wake the cat at any cost, even if there are incoming cars or elephants that may pose a threat to the cat’s life. In such a drastic circumstance, the household may be inconvenienced for a few days until a new cat arrives at its doorsteps. <br></br><br></br>
                    
                    ​The cats are known for their taciturn nature, but my Sphynx spoke to me once. In a hushed whisper, as if relaying some profound secret, it told me that they were all looking for their deity. But I was not interested in becoming the god of cats, so I politely declined.
                    </span>,
                },
                {
                    title: "i. dream of clumsy ideology",
                    date: "3/20/2017",
                    post: <span>I had a dream about a girl who read too much Edgar Allen Poe. And because she, too, was young and drenched in folly, it was very easy for her to fall in love with melancholy. She liked waking up to the sound of squeaky shoes, flushing toilets, and arguing family. Sometimes, she purposefully neglected to comb through her black hair, left the split ends to the whim of air that sat dutifully in rooms without humidifiers. She wore her grandfather’s eyes. They were grey with cataracts but she preferred idealism to clarity.<br></br><br></br>

                    ​On her desk, beside a tea canister caked by layers of dust, the girl kept a paperweight of a tiny deity. She found the god in a curiosity shop two weeks prior, having decided that it was the very sort of thing that would evoke just the right amount of mystery. Amusing herself, she secretly wished that it was a god of misfortune and prayed that it may one day speak and curse her for all eternity.<br></br><br></br>
                    
                    Her desires were indeed granted one absolutely ordinary day. Instead of damning the girl, however, the deity told her to stop scowling, to be more grateful, to be kinder to her parents. A girl at her age should know better than to slouch in her seat—instead, she should speak in a soft, singsong voice and take pictures of herself smiling with straight, white teeth. That was how she could get others to love her. ​
                    
                    </span>,
                },
                {
                    title: "Four years",
                    date: "3/4/2017",
                    post: <span>The number four can be tastefully expressed in binary. But it is quite arbitrary—why must we have four years of high school, four years of university? Why not three or five? Why must we start classes in the autumn and end in the spring? I digress. When the upward climb to classes is still inevitably accompanied by sheets of white, however, anyone would be skeptical of the arrival of spring. A season for encounters in the east, but partings in the west. I never said goodbye to my high school friends when we sang that last Disney medley during graduation because I thought their smiles would be an easy text and a ninety minute subway ride away. <br></br><br></br>

                    I am not very fond of the phrase “goodbye” in general; “see you” is a more euphemistic substitute. But the latter is a salutation that is harder to use here, especially when people come and go in steady cycles of four. It would be alright if everyone was the same age—we would all run happily hand-in-hand across the finish line (trope!)—but of course that sort of idealization only inspires tears in poorly written YA novels. In two months, the seniors will graduate and return to their own respective cities and lives, become the coveted figures known as <i>ALUMS</i>! that everyone flocks to for chances of internships. And with them, they will probably take all the late-night karaoke sessions, fake-deep discussions about love and happiness, and Pokemon GO adventures away. In fourteen months, the current juniors will follow suit. Rinse and repeat. Goodbye? More like badbye. <br></br><br></br>
                    
                    They say they will come back and visit. That’s nice. I will probably miss them less with the passage of time. That’s sad. They’re already formal adults, sort of. Meanwhile, we’re just muddling through—I am still technically pre-med on my transcript, too wary of confrontation to have that final discussion. And I am childish for being sentimental. <i>Carpe diem</i> is but a term conceptualized upon the imagery of a group of youngsters merrymaking like tomorrow is the end of the world. Life goes on, is all. <br></br><br></br>
                    
                    Four years ago seems like yesterday, yet four years into the future feels a little like eternity. I wonder if my senior self will still have bangs. If you’re not happy now, I hope you are happy four minutes later. That is not the reason the concept of time was invented, but you can believe so all the same.
                    </span>,
                },
                {
                    title: "Our centuries",
                    date: "2/25/2017",
                    post: <span>I juggle with the idea of an epoch-old memory because the stories of Emanon were inherently romantic. It's objectively nice to know, as well as recall, how life was first conceived in this world or when people began greeting their neighbors each morning and called that matter-of-fact. The me who remembers will probably be a better person than the me who does not.<br></br><br></br>

                    But genetics decided to station me on the opposite side of the platform, blessing me with a rather short-termed memory. Here, I offer my condolences to the friend I couldn't remember was pescatarian until a good three weeks into our acquaintance and to another whom I forgot changed their pronouns one month prior. I am making excuses.<br></br><br></br>
                    
                    ​In retrospect, these excuses conveniently buttress my escapist tendencies. You know that petty maneuver I dismissed as the byproduct of alcohol? I was actually sober and it's my fault, but I don't tell you that. And the time I impressed you with my exploits in that one obscure game only you knew about? In truth, I harbor zero interest in saving the world--I just wanted us to talk for a bit longer. Memories are quite the pesky entities, embellishing and augmenting themselves not by will, but by the injustice of your own subconscious. The singularity? Just kidding. They manifest in dreams and build proxies. What an utilitarian tragedy. I'm not lying, I merely just forgot. I laugh more than I should again today about something insignificant, although I’ll probably forget why by tomorrow. And that's okay too.
                    </span>,
                },
                {
                    title: "Between our lights",
                    date: "1/25/2017",
                    post: <span>The evening glow cast by the remnants of holiday illuminations is probably a different hue in your eyes. Just like how you can get the impression of how a person ticks by the manner in which they sip their morning coffee or how they fall asleep at night. A friend raves about the genius math boy with the flat face whom she liked since eleventh grade while another wishes that long hair and the man ponytail were still in fashion. I secretly mourn the practical nonexistence of mori fashion because honestly, everyone can be so much more aesthetic. But I save my preachings for another day.<br></br><br></br>

                    Today, someone in the world said “I wish we can just have world peace” and someone else next to them laughed. Last Saturday, my friends and I made signs and marched in Boston but everyone else laughed again. On rainy days, I do not like answering the phone and blame it on the inclement weather. But on sunny days, I’ll probably be too busy chasing contrails with my eyes. Sometimes, I listen to songs that remind me of you. At other times, I hum to melodies that do not. <br></br><br></br>
                    
                    ​After bagged lunch sits in room temperature for two days, the entire vicinity begins to stench. But there is a softness in decay that is strangely consoling. A voice whispers, “Stop being indecisive.” Let’s go before we recall the differences again. An encounter without acknowledgement is as good as goodbye. 
                    </span>,
                },
                {
                    title: "Under the blue",
                    date: "1/15/2017",
                    post: <span>Someone once said that when a person sees a bird in the sky, they acquire the urge to set out on a journey. Unfortunately, pigeons and crows are closer to commodity than sources of envy here and a college student on financial aid with overpriced dining options does not have disposable funds. There are easier ways to travel, whether that is vicariously through novels or sporadically through dreams. But something is very different about watching everyday scenery slowly vanish into a blur on a rat-infested train and washing the remains of a grasshopper off the back of your boots after finally finding concrete.<br></br><br></br>

                    There is temptation in a place (or at least the concept of a place) faraway where no one knows you. A courteous kindness that permeates every smile and conversation as long as that thin line of acquaintance is never crossed. When spring arrives, the soil will shed its ashen coat for a hue more organic, but you will not stay to witness the metamorphosis. Instead, you leave after only three days for another place that does not know the meaning of “cold.” The snowflakes you kept as memoir form a puddle of dirty water in your pocket. An escape mechanism that repeats itself but that is another placebo. <br></br><br></br>
                    
                    ​It’s not some deep metaphysical search for the meaning of existence—you passed that phase in eighth grade when your English teacher called you out for being too “cheesy.” It’s just an excuse intermixed with ego and perhaps a twinge of curiosity. There’s this idea called common sense that dictates why it is reasonable to take the shortest route when encountering a fork in the road or to automatically return home during the holidays. But if the sky that you believed was blue emanated a greenish glow in some distant land but you never got to see it, you would probably hate yourself.<br></br><br></br>
                    
                    It’s a synonym for irresponsibility and a reason to be childish. So you humor yourself and walk a little slower.
                    </span>,
                },
                {
                    title: "Used to playing god",
                    date: "1/7/2017",
                    post: <span>I checked my phone exactly thirteen times since I woke up at 9:13 AM this morning. It is only 10:43 AM. My entry mate next door blasted trance music on speakers at some ungodly hour last night. Tomorrow, at least half the population will be on the computer like I am today. Our generation was married to technology before we learned the vocabulary to speak our vows. <br></br><br></br>

                    And yet, many dismiss the prospects of artificial intelligence, space colonization, and the like as “scary” or “ridiculous” and by implication trivial in comparison to other more pressing matters such as poverty or warfare. These are the same people using Siri because they are too lazy to type and the GPS because physical maps are too difficult to follow, appropriately after heaving a dainty little sigh of condolence upon seeing a photo Syria circulated through popular media.<br></br><br></br>
                    
                    ​The utopia (or dystopia, depending on perspective) envisioned by science fiction that is inhabited by some combination of human, cyborg, and android may not be our current state of reality, but that is not to say such a world may never be upon us. I am not insinuating that I endorse test-tube babies and cryogenics nor am I calling technological advancement “progress” because such terminology connotes that there is some positive end goal humans are ultimately working towards. The tale of Icarus is often raised as a caution against transhumanism, yet the truth is the modern-day human is already capable of flight. And still, we are not satisfied. <br></br><br></br>
                    
                    Unlike fish that are content with completing their entire existences within the confines of a 48 x 12 x 20 inch tank, a human being placed within a box will inevitably develop the inclination to leave from said box. However, once he/she does eventually escape from the box, the cycle will only repeat itself if the human decides that he/she is bound by additional boxes—limitations of physical prowess, of mental capacities, of mortality. We are so enamored with the self-destructive idea of freedom that the technological advancement that provides us with a means to achieve it may halt but never terminate. The question is not whether it is morally permissible to merge with inorganic matter or reduce human existence to binary numbers in a program, but whether we even have a choice.<br></br><br></br>
                    
                    Even if we may understand the repercussions of technology, we grow accustomed to it by convenience. Spending an entire 24 hours in front of a screen is unthinkable to society of the 1900s, but the norm for the hikikomori culture of Japan. Transhumanism is rightfully scrutinized now, but the same treatment may not apply 100 years into the future. Perhaps 20,000 years from now, transhumans will look back at history records and scoff at the narrow-mindedness of us, the archaic humans, just as we ridicule those who subscribed to the geocentric model of the universe. If that was the case, then human adaptability is the true tragedy. 
                    </span>,
                },
                {
                    title: "Dilly-dallying",
                    date: "12/15/2016",
                    post: <span>Despite my Piscean INFP tendencies, I try to keep my feet firmly planted on the ground. But sometimes, imitational melancholy seems like a nice jigsaw piece to fit into the short respite between finals week and winter study, the time specifically designated for gaiety just because some old dude sat down at his desk, pushed up the silver-rimmed spectacles perched on his nose, and proclaimed in a scruffy voice, "Henceforth we shall commence the holiday season!" Just kidding. Melancholy just seems more defiant than boring ol' solitude―what a clichéd, overrated term―of course everyone is lonely. From the introvert who has "Chasing Cars" on perpetual replay to the extrovert who asserts that everyone on campus is his "boi," we're all the same. Yet each year, I still hang up LED lights and sing Christmas carols and countdown with the rest of the world.<br></br><br></br>

                    But when fickleness renders even melancholy itself boring, there's nothing wrong with indulging in festive follies―"it's a self-fulfilling prophecy!" my friend likes to say. So I'll flood that fir tree with as many ornaments as I can get my hands on, scream the lyrics to "Last Christmas" just to annoy the person on the other end of the Skype call. There's nothing wrong with a girl getting tipsy off a few shots just before holiday break and accidentally shedding tears over something that ended quietly long ago. Nothing wrong with her shamelessly crashing a friend's dorm afterwards because if she slept alone that night, she probably would've cried more. My new year's resolution for 2017 is to become more honest with myself. That is to say, I wish supermarkets sold eggnog during all four seasons of the year, despite having personally spread the word that egg yolk is gross. I would gladly sacrifice the concept of pumpkin spice lattes if Santa granted this desire―oh wait, that is outside his job description and he doesn't even exist.<br></br><br></br>
                    
                    ​​That's the easy way to live. Don't drift off into REM sleep expecting a white Christmas at the ice rink in Bryant Park because global warming is very real and all you're waking up to is cold feet. Instead, Christmas Day is better spent under ten layers of blankets alternating between the Home Alone trilogy and Yuzuru Hanyu videos. Don't fall in love with the boy who reads Murakami because upon closer textual analysis, all his male protagonists are basically misanthropists with ear fetishes and a cultivated taste for jazz (is that my type?!). Run to the bathroom whenever you sense the conversation coming since A+'s are practically mythological creatures now that the glory days of high school are over. Everyone was a genius in elementary school, gifted and talented until college. Now, we are just average, though that itself is slightly comforting.
                    </span>,
                },
                {
                    title: "Like no one ever was",
                    date: "12/9/2016",
                    post: <span>When virtual reality was still a term exclusive to the realm of science fiction, I was a snobby twelve-year-old who always hogged the restroom for twenty minutes too long. Humming the retro 8-bit battle themes in the shower, where bubbles made from bath sponges became the "Bubblebeam" of my rival's old Squirtle, I carefully devised in my own mind theatre the most elegant way I could reconquer the Elite Four. <br></br><br></br>

                    ​Now, virtual reality is located exactly a three minute walk away on the second floor of the Sawyer library in the room specifically reserved for upperclassmen computer science majors. I still periodically check my phone just in case a Dragonite or Lapras chances upon me, even though I do not sing in the showers anymore.<br></br><br></br>
                    
                    The clever bastards who made the App Store phenomenon know. We know. When the Millennials who grew up in the crevices between analog and digital willingly sold their childhoods to capitalism, we mutually understood yet never acknowledged that nostalgia was a drug. Saccharine toxins more reliable than any placebo, reminding you of the "good ol' days" when you had to rush to a Pokecenter before your favorite starter fainted due to poison, when possession of an Alakazam separated the cool kids from the plebs because no one knew how to trade, when your president did not look like a rabid Raticate. My generation.<br></br><br></br>
                    ​
                    I still relish the very moment it starts―whether that is in Pallet Town, Littleroot, or Twinleaf. After selecting the starter with the most aesthetic third evolution, you step into that first patch of wild grass and off you go, free in uncharted waters. Each time you defeat the evil team, name the legendary you caught with the master ball after your crush, and save the world, you selfishly wish that you can forget, just so you can feel that initial euphoria all over again.<br></br><br></br>
                    
                    But before you realized how huge Kalos was, they already threw you Alola. And it's sometimes hard to be the very best without a 3DS, especially when some snobby twelve-year-old has more time for EV training than you. 
                    </span>,
                },
                {
                    title: "Times gone by",
                    date: "12/5/2016",
                    post: <span>With a swift finger tap, a good internet friend of mine deactivated his art account the other day, effectively cutting off our sole source of communication. Considering he lived halfway across the globe and "Tofu" could not possibly be his real name, we would never speak again. I lost a 40+ day streak on Snapchat with another friend I haven't seen for around the same number of days, and we mutually kept it that way. A third party informed me that the girl I used to call "bff" in elementary school moved to New Jersey two months ago. It was all without much fanfare so I nonchalantly acknowledged the fact.<br></br><br></br>

                    People are like Bruno Mars songs: easy come, easy go. Some leave a heavier trace of themselves than others, whether that is manifested in pixels of text designed to mimic human conversation or in polaroids that were way too expensive but regardless hastily purchased so that we, too, would be "like the hipsters." But at least with the latter, I would have a face to place with the memories.<br></br><br></br>
                    
                    ✒ 2008. Memories of a time long ago when the term "squad" was not yet popularized through social media but we were the quintessential of squad. When stranger danger was the last thing on our minds and five prepubescent little girls skyped each other everyday and posted group song covers on Youtube, thinking we were going to make it big someday.<br></br><br></br>
                    
                    ✒ 2009-2010. Memories of Azn Invazn. When Kyle did not get depression and disappear off the face of the globe. When Andy had a football head and was way too obsessed with professional wrestling and Fantasy Football (tbh he probably still is). When Luke still spoke to us. It's only Izzy and I now. The stories of Kagami and Izumi, of Aria and Ilsa, remain unfinished, neatly archived in the back of my drawer somewhere, forever reminding me of our crazy antics and the fact that karma is always out to get us.<br></br><br></br>
                    
                    ✒ 2011. Memories of Alfie, the boy one year older than me with the British accent and (according to him at least) the most accurate gaydar. We were two bored, internet savvy kids doing kid things, trying to run away from the adult shoes we inevitably had to inherit. He's good at comforting people. I often wondered if that was what having an older brother felt like.<br></br><br></br>
                    
                    ✒ 2012. Memories of Leo, the Asian Holden Caulfield, with Cien. Good times when angsty high schoolers made fun of angst itself.<br></br><br></br>
                    ​
                    ✒ 2013-2014. Memories of "Dicken bois" with Eris and Wendy―Nir, Kiru, and Pikko―three street urchins against the world. It was the first time art trades and collaborations didn't feel like work. When everyone had a giant platonic crush on each other's art styles and in the universe of Rugiguji, our characters were infinite.
                    </span>,
                },
                {
                    title: "A change of scenery",
                    date: "12/4/2016",
                    post: <span>4:35 PM marks the beginning of sunset. Too early for those who arose from their slumber mid-afternoon, yet too late for the individuals who subscribed to nyctophilia the moment the word home shifted from a cozy brownstone in the suburbs to a stuffy room identical to a hundred other ones hammered into the enormous building complex someone said was modeled after a ship. But you're located in the middle of nowhere. There is no water.<br></br><br></br>

                    As compensation, the mountains are rather generous in the plant department. When deeper hues of mauve slowly splay across the sky, the trees outside twist and turn into amorphous shadows―large, wavering, yet strangely comforting. And when you pause for a moment, briefly counteracting the gravity pulling you downhill back to your room for a night of finals cramming, you notice a soft lull that lingers in the air. It politely sits there with the flickering lamp posts, almost comically threatening you, even though the most sinister presence here would be a lone squirrel chucking you acorns in indignation because you tried to approach it for a picture. <br></br><br></br>
                    
                    And as days turn into weeks and weeks into months, the walks through the embrace of the trees become routine. The same security beckons you, reminds you that even as a decent adult, it is sometimes still acceptable to shy away from responsibilities. You almost forget that your home was a place where the sea was objectively more attractive than the woods, where stars were either myths or airplanes traveling too slow for their own good. So when your mother asks why you haven't called, you are ashamed to admit that you googled "homesickness" and wonder why you do not look forward to concrete and pigeons as much as you should.<br></br><br></br>
                    
                    ​The trees back there were touched by too many human hands to be loved. Though it's true you still miss the water.
                    </span>,
                },
                {
                    title: "Heartbeats per second",
                    date: "12/3/2016",
                    post: <span>The steady rhythm that greeted me this morning was not the usual cacophony of my 7:20 AM alarm, but the echo of footsteps, remnants from a dream I failed to recall. I woke up to lethargy and conceded to it, easing into my sheets while instinctively hitting the play button on my phone. Two birds, one stone. As the piano intro seamlessly transitioned into triggering words (simultaneously rendering myself personally attacked, but that's ok), I mumbled along.<br></br><br></br>

                    When Toru noted the hypocrisy of human nature during student protests at Tokyo University, he wasn't kidding. I could still recall that skeptic from two months prior, scoffing at the plethora of love songs plaguing modern-day media, dismissing the friend who cried over the termination of a toxic relationship as childish. But now I found myself buying into commercial melancholy as well.<br></br><br></br>
                    
                    It all happened too rapidly, too spontaneously. When two hearts were aligned, it was something akin to milk and honey. But when uncomfortable silence gradually permeated the afternoon air, stuck to my lips like dust to hot glue, it was closer to a game of pretend―who is the better borderline masochist―all in bad fun, of course. And it was easy to settle into this cycle, remind yourself of hands that perpetually smelled of tangerines, the straining voice that cracked when reaching notes beyond high C. How stasis was a stage that benefitted no one. How weed and beer were terrible life choices that exacerbated your sore throat but were nonsensically acceptable because you're a college student and he liked them.<br></br><br></br>
                    
                    So I'll wait for the hustle and bustle to catch up to me, wait for time to accustom myself to a new pattern. Or perhaps the cycle would repeat once more for a different heartbeat, at a different rate per second, not like I had much significant say in the rhythm of my own. 
                    </span>,
                }
            ]
        }
    }

    renderPost(post, index) {
        return (
            <div key={"index_" + index} className="light-text-standard">
                <div className='blog-post-title'>
                    {post.title}
                </div>
                <div className='blog-post-date'>
                    {post.date}
                </div>
                <hr></hr>
                <div>
                    {post.post}
                </div>
            </div>
        )
    }

    render() {
        return(
            <div className="main-wrapper">
                <Topbar/>
                <div className="about-wrapper">
                    <div className="flex-column pub-wrapper">
                        <div className="center" style={{fontSize: "0.8em", color: "rgb(97, 93, 93)"}}>
                            ✧ oops, how did u get here? well, enjoy the stay, pardon the angst. a little cynical & tired here, but the tides are always high. ✧
                        </div>
                        <div className="fun-text">
                            {
                                this.state.blogposts.map((item, index) => {
                                    return this.renderPost(item, index)
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="flex-row flex-center footer">made while boppin' to city pop 🌃🎶 by Tongyu Zhou</div>
            </div>
        )
    }
}