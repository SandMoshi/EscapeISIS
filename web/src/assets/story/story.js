const story = {
    "0": {
        chapter: 0,
        music: 'Echoes_of_Time',
        textArray: [
            "☶⋀☷☱☶ Are you ready? ☷☶☐☶☵",
            "Please make your selection below",
        ],
        options:{
            a: {
                buttonText: 'I\'m Ready',
                goToChapter: '1',
            },
            b: {
                buttonText: 'I\'m not sure',
                goToChapter: '0a',
            },
        }
    },
    "0a": {
        chapter: '0a',
        music: 'Echoes_of_Time',
        textArray: [
            "Look, I don't know you but I believe in you.",
            '','','','','','',
            "You've been preparing for something like this for a long time.",
            '','','','','','',
            "Go ahead. Don't be afraid.",
        ],
        options:{
            a: {
                buttonText: 'Okay, I\'m Ready',
                goToChapter: 1,
            },
            b: null,
        }
    },
    "1": {
        chapter: '1',
        music: 'Echoes_of_Time',
        textArray: [
            "June 2014 ",
            '','','','','','',
            "Beirut ",
            '','','','','','',
            "You are sitting in your windowless office at the American embassy in Beirut. The last two years have been spent studying regional terror groups and typing reports while you wait for your first deployment in the field.",
            '','','','','','',
            "Today has been spent reading newspapers. Taking notes on what is being written in arabic articles and translating key points into English.",
            '','','','','','',
            "You put your paper down as a message comes across the news wire..."
        ],
        options:{
            a: {
                buttonText: 'Continue',
                goToChapter: '1b',
            },
            b: null,
        }
    },
    "1b" :{
        chapter: '1b',
        music: 'Echoes_of_Time',
        textArray: [
            "An Al-Qaeda splinter group, known as ISIS and operating out of Syria, crossed over into Iraq and attacked Mosul. Forcing the Iraqi army to retreat. They quickly took control of Iraq's second largest city.",
            '','','','','','',
            "The group also took over several highways, oil production facilities, and the majority of several provinces.",
            '','','','','','',
            "Reports of masscres are widespread.",
            '','','','','','',
            "The region is thrown into chaos.",
        ],
        options:{
            a: {
                buttonText: 'View Map',
                goToChapter: "2",
            },
            b: null,
        }
    },
    "2":{
        chapter: "2",
        music: 'Echoes_of_Time',
        textArray: null,
        imagePath:'iraqSyria3b',
        imageFontSize: '0.35rem',
        options:{
            a: {
                buttonText: 'Continue',
                goToChapter: "3",
            },
            b: null,
        }
    },
    "3" :{
        chapter: '3',
        music: 'Echoes_of_Time',
        textArray: [
            "There is a murmur in the office as everyone tries to make sense of the news. Retired Colonel Earl Jackson, the station chief of the Beirut office and your boss, is preoccupied with meetings all day. A lot even for him.",
            '','','','','','',
            "Late that afternoon, Jackson's secratary asks you to come to his office.",
            '','','','','','',
            "Special Agent Jackson explains to you that the success of the attack by ISIS was unexpected. They had under-estimated their resources and ability to almost instantaneously capture large swaths of land and don't have the assets in place to deal with this threat.",
            '','','','','','',
            "\"We need boots on the ground.\"",
        ],
        options:{
            a: {
                buttonText: 'Continue',
                goToChapter: "3a",
            },
            b: null,
        }
    },
    "3a" :{
        chapter: '3a',
        music: 'Echoes_of_Time',
        textArray: [
            "You offer assistance: \"What can I do to help?\"",
            '','','','','','',
            "\"We need you to go undercover in ISIS controlled territory.\"",
            '','','','','','',
            '','','','','','',
            '','','','','','',
            '','','','','','',
            '','','','','','',
            '','','','','','',
            "\"This is what you've been preparing for.\"",
            '','','','','','',
            "Your mission will be to gather intelligence, run local sources, and work with local resistance.",
            '','','','','','',
            "Do you accept this mission?",
        ],
        options:{
            a: {
                buttonText: 'Yes Sir',
                goToChapter: "4",
            },
            b: {
                buttonText: 'I"m not ready',
                goToChapter: "3b",
            },
        }
    },
    "3b" :{
        chapter: '3b',
        music: 'Echoes_of_Time',
        textArray: [
            "\"Listen, you've been preparing for something like this for a while now.\"",
            '','','','','','',
            "\"This is what you came to Beirut to do and you're the best person for the job.\"",
            '','','','','','',
            "\"We need you. There isn't another option.\"",
            '','','','','','',
            '','','','','','',
            '','','','','','',
            '','','','','','',
            '','','','','','',
            '','','','','','',
            "\"Understand?\"",
        ],
        options:{
            a: {
                buttonText: 'Yes Sir',
                goToChapter: "4",
            },
            b: null
        }
    },
    "4" :{
        chapter: '4',
        music: 'Echoes_of_Time',
        textArray: [
            "2 Weeks Later ",
            '','','','','','',
            "Beirut ",
            '','','','','','',
            '','','','','','',
            "You find yourself in a meeting with the station chief and senior bureau staff discussing the final details of the mission.",
            '','','','','','',
            "ISIS's defacto capital is located in the Syrian city of Raqqa. They have complete control of that part of the country. Which is why you will be deployed there.",
            '','','','','','',
            "You will fly into Baghdad then travel across the desert into Syria where you will setup your fake identity and begin intelligence operations.",
            '','','','','','',
            "You have two options to get into Raqqa. You can go undercover as a civilian or you can be smuggled in.",
        ],
        options:{
            a: {
                buttonText: 'Smuggled',
                goToChapter: "6",
            },
            b: {
                buttonText: 'Undercover',
                goToChapter: "5",
            },
        }
    },
    "5" :{
        chapter: '5',
        music: 'Echoes_of_Time',
        textArray: [
            "You're provided the details of your cover: A freelance journalist for an online news organization. You're supplied with fake documents, credentials, and journalism equipment.",
            '','','','','','',
            "The next morning, you fly into Baghdad. It's a hot, hectic city, and tension hangs in the air.  Your driver picks you up to begin the 6 hour drive to the Syrian border.",
            '','','','','','',
            "You notice the driver is becoming increasingly anxious as you approach the border crossing.",
            '','','','','','',
            "Your documents are passed to a military officer, who then dissapears for what feels like ages.",
            '','','','','','',
            '','','','','','',
            '','','','','','',
            "The officer reappears, and waves you over for additional questioning.",
        ],
        options:{
            a: {
                buttonText: 'Continue',
                goToChapter: "5a",
            },
            b: null
        }
    },
    "5a" :{
        chapter: '5a',
        music: 'Echoes_of_Time',
        textArray: [
            "You're escorted into a small cement building, and seated in what appears to be the Commander's office.",
            '','','','','','',
            "The driver is taken into a seperate room.",
            '','','','','','',
            '','','','','','',
            "The Commander enters, and starts asking questions.  There seems to be a strong interest in your employer, your intentions, and your previous work as a journalist in the area.",
            '','','','','','',
            "He insists he needs to make phone calls before you're allowed to enter Syria.",
            '','','','','','',
            '','','','','','',
            '','','','','','',
            "One hour passes.  The room is getting hotter.",
            '','','','','','',
            '','','','','','',
            '','','','','','',
            "Two hours.",
            '','','','','','',
            '','','','','','',
            '','','','','','',
            '','','','','','',
            "A soldier appears, \"You're free to pass. Goodluck.\"",
        ],
        options:{
            a: {
                buttonText: 'Continue',
                goToChapter: "5b",
            },
            b: null
        }
    },
    "5b" :{
        chapter: '5b',
        music: 'Echoes_of_Time',
        textArray: [
            "Back on the road, you're able to relax again.  You're now in Syria, but still several hours away from the safehouse.",
            '','','','','','',
            "As you reach the city limits, the sky darkens, and the traffic is beginning to increase.",
            '','','','','','',
            '','','','','','',
            "The driver insists that it's already late, and it's unsafe to be driving at this hour",
            '','','','','','',
            "With your awareness on high, you realize the car behind you is the same one you saw hours earlier",
            '','','','','','',
            "There are two plausable options: It's a traveller with the same route, or it's a tail sent to folow you",
            '','','','','','',
            '','','','','','',
            "Do you attempt to lose the tail, or continue to the nearby safehouse?",
        ],
        options:{
            a: {
                buttonText: 'Directly to Safehouse',
                goToChapter: "8a",
            },
            b: {
                buttonText: 'Lose the Tail',
                goToChapter: "8b",
            },
        }
    },
    "8" :{
        chapter: '8',
        music: 'Echoes_of_Time',
        textArray: [
            "The truck is now back on the highway. Unfortunately for you, several hours remain until you reach the safehouse. All the while you are stuck in an incredibly uncomfortable compartment with no access to a toilet.",
            '','','','','','',
            '','','','','','',
            "The truck stops at several checkpoints along the way, luckily without issue. Even during wartime, it's common for truck drivers to drive back and forth between hostile territories to make deliveries.",
            '','','','','','',
            "At last the truck comes to it's final stop and you hear the driver tap three times. Your legs are so stiff you almost collapse as you try to stand.",
            '','','','','','',
            "It's midnight and you've finally arrived. The building is a 2 story cement building, located on a cramped, but relatively quiet residential street. A local asset has secured the second floor apartment for you.",
            '','','','','','',
            "Exhausted,  hungry,  and dehydrated, you survey your surroundings before climbing the stairs to the apartment and preparing for bed.",
        ],
        options:{
            a: {
                buttonText: 'Continue',
                goToChapter: "10",
            },
            b: null
        }
    },
    "8a" :{
        chapter: '8a',
        music: 'Echoes_of_Time',
        textArray: [
            "You're dead tired - and you know each minute spent driving the streets increases the chance of running into a checkpoint and being captured.",
            '','','','','','',
            '','','','','','',
            "You don't want to get captured before your mission even begins.",
            '','','','','','',
            "With your immediate safety in mind, you tell the driver to take you directly to the safehouse.",
            '','','','','','',
            "You finally arrive around midnight. The building is a 2 story cement building, located on a cramped, but relatively quiet residential street. A local source has secured the second floor apartment for you.",
            '','','','','','',
            "Exhausted,  hungry,  and dehydrated, you scope out your surroundings before climbing the stairs to the apartment and preparing for bed.",
            '','','','','','',
        ],
        options:{
            a: {
                buttonText: 'Continue',
                goToChapter: "9",
            },
            b: null
        }
    },
    "8b" :{
        chapter: '8b',
        music: 'Echoes_of_Time',
        textArray: [
            "You're both dead tired and don't want to deal with the hassle.  However, you know that sloppiness is what gets agents caught.",
            '','','','','','',
            "You direct the driver to lose the tail.",
            '','','','','','',
            "Immediately, the driver turns off the busy street. He drives hastily down a side street then loops around in the opposite direction.",
            '','','','','','',
            "No regular civilian would be making these turns and before long you've lost the tail and are alone again. The driver proceeds to the safe house.",
            '','','','','','',
            "You finally arrive around midnight. The building is a 2 story cement building, located on a cramped, but relatively quiet residential street.  A local source has secured the second floor apartment for you.",
            '','','','','','',
            "Exhausted,  hungry,  and dehydrated, you perform your checks you climb the stairs to the apartment and prepare for bed.",
            '','','','','','',
        ],
        options:{
            a: {
                buttonText: 'Continue',
                goToChapter: "10",
            },
            b: null
        }
    },
    "9" :{
        chapter: '9',
        music: 'Echoes_of_Time',
        textArray: [
            "You are awoken in the middle of the night by pounding on the metal door.",
            '','','','','','',
            "No one is supposed to even know you're here! You remain quiet.",
            '','','','','','',
            "However they don't go away and it doesn't take them long to break down the door and soldiers rush into your room.",
            '','','','','','',
            "There is nowhere to go. You give yourself up without a fight.",
            '','','','','','',
            "One of them remarks that it's curious a journalist already has an apartment waiting for him and is not staying at any of the hotels all the other journalists use.",
            '','','','','','',
            "You say nothing. You are arrested and sent to prison.",
            '','','','','','',
        ],
        options:{
            a: {
                buttonText: 'Back',
                goToChapter: '5b',
            },
            b:  {
                buttonText: 'Continue',
                goToChapter: 'prison',
            },
        }
    },
    "6" :{
        chapter: '6',
        music: 'Echoes_of_Time',
        textArray: [
            "You're provided the details of your cover: You will be smuggled into Syria and pretend to be a local. You're supplied with fake documents, credentials, clothes, and information on local customs, traditions, and dialect.",
            '','','','','','',
            "The next morning, you fly into Baghdad. It's a hot, hectic city, and tension hangs in the air.  Your driver picks you up and shows you the hidden compartment you'll be in during the 6 hour journey to the Syrian border.",
            '','','','','','',
            "You reluctantly pile into the false gas tank on the large fruit truck that's filled with watermelons. You're told to not speak or move at any time while the vehicle is stopped.",
            '','','','','','',
            '','','','','','',
            '','','','','','',
            "Several bumpy hours go by before you feel the truck slow down and then come to a rest."  
        ],
        options:{
            a: {
                buttonText: 'Continue',
                goToChapter: "7",
            },
            b: null
        }
    },
    "7" :{
        chapter: '7',
        music: 'Echoes_of_Time',
        textArray: [
            "Once the vehicle is stopped, the driver turns off the engine and gets out. You can hear orders beind shouted by what sound like soldiers.",
            '','','','','','',
            "The driver explains he is taking the watermelons to be sold at the market. The solider seems suspicious. You hear him insisting on an thorough inspection and unloading of the vehicle.",
            '','','','','','',
            "The driver protests, saying that he's in a hurry and has made this trip dozens of times before with no issues. You tense up.",
            '','','','','','',
            '','','','','','',
            "The solider goes quiet for a moment, before asking how much the inconvenience will cost him. The driver, wise to fact the solider is fishing for a bribe, says he will lose $75 american dollars and offers to pay 2/3 of that as a fee. The solider gladly accepts the bribe and tells the driver to get on his way.",
            '','','','','','',
            "A wave of relief floods over you as you feel the engine start and wheels begin to roll forward.",
        ],
        options:{
            a: {
                buttonText: 'Continue',
                goToChapter: "8",
            },
            b: null
        }
    },
    "10" :{
        chapter: '10',
        music: 'Echoes_of_Time',
        textArray: [
            "The Next Morning.",
            '','','','','','',
            '','','','','','',
            "All you have in the apartment are the possessions given to you at the embassy before departing, some equipement to send and recieve transmissions, and the furniture that came with the apartment. You check the fridge. It's empty.",
            '','','','','','',
            "You were told to sit tight and wait for a local asset to make contact. The asset is supposed to leave a mark on the garden walls to let you know they want to meet.",
            '','','','','','',
            "In the meantime, you decide to go to the market to get food and scout the surrounding area.",
        ],
        options:{
            a: {
                buttonText: 'Go to the Market',
                goToChapter: "10b",
            },
            b: {
                buttonText: 'Shower First',
                goToChapter: "10a",
            },
        }
    },
    "10a" :{
        chapter: '10a',
        music: 'Echoes_of_Time',
        textArray: [
            "After spending over six hours under a truck, your skin is filthy and you smell like diesel, so you jump into the shower to get the grime off you. Besides, the last thing you want is to attract any unwanted attention at the market.",
            '','','','','','',
            "Luckily, you were given a change of clothes that will help you blend in with the locals. Although the locals often wear jeans and t-shirts, the sublte differences in fit and styling would quickly give you away if you went out in yesterday's clothes.",
            '','','','','','',
            "As for the rest of your appearance, as a dark haired man of Italian descent you can pass as a local when needed and your arabic is almost perfect after years of training.",
            '','','','','','',
            "You change into you second set of clothes and head out the door.",
        ],
        options:{
            a: {
                buttonText: 'Walk to the Market',
                goToChapter: "11",
            },
            b: null,
        }
    },
    "10b" :{
        chapter: '10b',
        music: 'Echoes_of_Time',
        textArray: [
            "You take some of the local currency given to you and head out on foot. You arrive twenty minutes later. It's an open air market lining the narrow winding streets with vendors selling evertyhing from fruit to bars of soap to cellphones.",
            '','','','','','',
            "You buy some food then casually walk around. You notice that many people walk quietly past the ISIS fighters standing guard on most corners, harassing anyone that catches their attention. You also notice some stall owners eyeing you closely as you walk by. You finish shopping and return to your apartment without incident.",
            '','','','','','',
            "An hour later, a trio of local fighters appear at your door. You had foolishly forgot to change into street clothes before heading out and someone had noticed you wearing American clothing slowly walking around the market looking lost.",
            '','','','','','',
            "You plead your innocence but the fighters aren't happy with your answers. They search your apartment and find your transmission equipemnt. You are arrested and taken to jail."
        ],
        options:{
            a: {
                buttonText: 'Back',
                goToChapter: "10",
            },
            b: {
                buttonText: 'Continue',
                goToChapter: "prison",
            },
        }
    },
    "11" :{
        chapter: '11',
        music: 'Echoes_of_Time',
        textArray: [
            "There market isn't too far on foot and you arrive in under twenty minutes. It's an open air market lining the narrow winding streets with vendors selling evertyhing from fruit to bars of soap to cellphones.",
            '','','','','','',
            "You buy some food then casually walk around. You notice that many people walk quietly past the ISIS fighters standing guard on most corners, harassing anyone that catches their attention. You pretend to be preoccupied by your shopping as you walk by and luckily they don't pay you any attention. The agency's technical service teams always pick out simple but very effective disguises.",
            '','','','','','',
            "You finish your shopping, keeping mental notes everything you saw, number of fighters, and any chatter you overheard.",
            '','','','','','',
            "You return to the safehouse, your wall doesn't have any markings yet. You go inside and soon after begin transmitting the day's events to HQ."
        ],
        options:{
            a: {
                buttonText: 'Back',
                goToChapter: "12",
            },
            b: null,
        }
    },
    "12" :{
        chapter: '12',
        music: 'Echoes_of_Time',
        textArray: [
            "The Next Day",
            '','','','','','',
            '','','','','','',
            "While you wait for the asset to make contact you decide to focus on your other objective. Reconnaissance.",
            '','','','','','',
            "You are to take notes on troop movements, location of military defenses, bases, and any other useful military information. You also need to provide HUMINT. Intelligence collected from human sources.",
            '','','','','','',
            "You decide the best way to go about this is on foot once again. You travel to the historic old town, near the outdoor market. You make mental notes of all the checkpoints you come across but are careful to avoid them when possible. You also observer fighters standing near many intersections as well as technicals, weaponized pick-up trucks, patrolling major streets.",
            '','','','','','',
        ],
        options:{
            a: {
                buttonText: 'Continue',
                goToChapter: "12a",
            },
            b: null,
        }
    },
    "12a" :{
        chapter: '12a',
        music: 'Echoes_of_Time',
        textArray: [
            "However, most of this information can be inferred using satellite imagery and drones flying overheard.",
            '','','','','','',
            "What is really valuable is understanding the sentiment of the locals. Western governments are keen to gauge how strongly the civilians really support ISIS and how cooperative they'd be in helping drive ISIS out one day.",
            '','','','','','',
            "The population has only been ruled by an ISIS government for a few weeks and some civilians have been publicly applauding the return of vital services such as electricity and water but it remains to be seen what they truly think of the barbaric regime.",
            '','','','','','',
            "You know it's risky to approach strangers and to discuss such things on the street but sometimes it's a risk worth taking.",
            '','','','','','',
        ],
        options:{
            a: {
                buttonText: 'Talk to the Locals',
                goToChapter: "12b",
            },
            b: {
                buttonText: 'Keep to Yourself',
                goToChapter: "12c",
            },
        }
    },
    "12b" :{
        chapter: '12b',
        music: 'Echoes_of_Time',
        textArray: [
            "As you walk the streets you try to strike up conversation at market stalls with innocent questions such as \"Are you finding it hard to keep supplies stocked?\" As expected, most aren't willing to discuss politics and or say anything even close to negative about the regime. Their reputation for killing dissenters has spread quickly amongst the general population.",
            '','','','','','',
            "Some people are naively answer your questions openly before realizing what they've said and quickly hush up. Others go into long tirades against America and her western allies. Shortly after a quiet conservation with an elderly gentleman, your spine tingles. You look behind you to see one of the stall owners you had approached earlier talking to a fighter and pointing in your direction.",
            '','','','','','',
            "You walk in the opposite direction but the fighter begins to follow you. He shouts at you to stop. You turn down into an alleyway before breaking into a sprint. You run down the back street but now you can hear multiple voices calling after you. You reach a T in the alley. Do you go left or right?",
        ],
        options:{
            a: {
                buttonText: 'Go Left',
                goToChapter: "12e",
            },
            b: {
                buttonText: 'Go Right',
                goToChapter: "12f",
            },
        }
    },
    "12c" :{
        chapter: '12c',
        music: 'Echoes_of_Time',
        textArray: [
            "You'd love nothing more than to delve deep into conversation with some locals, but once again your training and instincts kick in. You realize that approaching strangers on the street in a busy market is not the right approach. Most people would assume you're trying to arrest enemies of the regime and wouldn't even bother talking to you.",
            '','','','','','',
            "It'd be better if you were somewhere where conversation about things, including politics, occurs organicly. Maybe one of the cafes that still remain. However, that will have to wait for another day. You decide to head back and check to see if the asset has made contact yet.",
            '','','','','','',
            "You return to the safehouse, still nothing. You're surprised it has taken this long but it's not unheard of.",
            '','','','','','',
            "You prepare your report and transmit your day's findings. Maybe you'll go to a cafe tomorrow.",
        ],
        options:{
            a: {
                buttonText: 'Talk to the Locals',
                goToChapter: "12b",
            },
            b: {
                buttonText: 'Keep to Yourself',
                goToChapter: "13",
            },
        }
    },
    "12e" :{
        chapter: '12e',
        music: 'Echoes_of_Time',
        textArray: [
            "Both directions look the same and neither exit onto the street so you turn left and look for an escape.",
            '','','','','','',
            "After zig-zagging down the alley you run out of options and face a dead-end. You try the door to some apartments but all are locked and the metal doors don't have windows.",
            '','','','','','',
            "The fighters soon after catch up to you. The gig is up. You should have known better than to approach people on the street.",
            '','','','','','',
            "You give yourself up. You are arrested and taken to jail. At best you'll be tried as a dissident at worst you\'ll be hung as a spy.",
        ],
        options:{
            a: {
                buttonText: 'Back',
                goToChapter: "12b",
            },
            b: {
                buttonText: 'Continue',
                goToChapter: "prison",
            },
        }
    },
    "12f" :{
        chapter: '12f',
        music: 'Echoes_of_Time',
        textArray: [
            "Both directions look the same and neither exit onto the street so you turn right and hope there is an escape.",
            '','','','','','',
            "You zig-zag down the narrow alleyways, looking for an open door or exit onto the street. You've almost run out of options as you keep encountering dead ends before you round the corner and find yourself on the busy market street.",
            '','','','','','',
            "You breath a sigh of relief. One of the things you've been trained on is how to blend into the crowd and a busy market with barely enough room to walk through is the perfect place. You quickly hand a merchant a large bill and grab one shirt and hat and before long you've dissappeared amongst the horde of shoppers.",
            '','','','','','',
            "You make it back to your apartment and breath a sigh of relief. You won't make a mistake like that again anytime soon.",
        ],
        options:{
            a: {
                buttonText: 'Continue',
                goToChapter: "13",
            },
            b: null,
        }
    },
}


export default story;