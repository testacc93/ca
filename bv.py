import requests 
# from bs4 import BeautifulSoup 
import random 
import selenium 
from selenium import webdriver 
import time 
from selenium.webdriver.common.keys import Keys 
i=0 
j=0 
driver = webdriver.Chrome(executable_path='/home/ankur/Downloads/chromedriver/chromedriver') 
driver.get("https://bitvest.io/") 
no_users = ' ' 
# '{0} number of users online'.format(no_users), 
data=['what is happening in here', 
      'damn dice come on' , 'you gotta be kidding me dice','let me reach somewhere','fak me ded', 
      'i aint winning shit','may be someone else would','i accept my fate as it is','and i am okay with it', 
      'i need to get some wins','i play dumb sometimes','i am trying to improve on that','dont know when it would happen', 
      'but i am hopeful on it','i thank my lucky stars',"yeah it is looking good", 'and it is gonna stay for long', 'lol','lets see for how long', 
      'we need a promo party', "but only when he comes" ,'not randomly at any time', 'but you never know', 
      'that was bound to happen','it will come and go' , 'the tokens i meant',' we must stay strong in here', 
      'because thats all we can do', 'we have no other option to win', 'we must fight with dice', 
      'no matter how big it looks','let me handle this time','come mess with me dice','i will beat you up', 
      'there is no way to get it sometimes', 'but we might get lucky', 'shed some light on me', 
      'i have to pray to god to win' , 'let us win something','we must keep going bud','keep going and going', 
      'we must not stop anywhere','you never know what might just happen','it will happen when it has to', 
      'the luck is coming back', 'i can feel it coming', 'we must push hard','only if it would let us win', 
      'what are we seeing tonight', 'hoping for a good run again', 'we must not sleep while playing', 
      'drinking isnt allowed either while playing', 'not sure of him though', 'what that thing is anyway', 
      'what does that even mean','wish everyone luck in here', 'keep the games safe for yourself', 
      'dice should be nice to us','like we are nice to dice','lol thats a good rhyme','nice dice', 
      'even dice nice sounds great','i need a good run','lemme not just stop at small','we must aim for big', 
      'thats what i believe in','never tried plink and other','may be i will try it','i do play it once a while', 
      'just not used to it','may be i will get used to it','with time you never know','i never sleep', 
      'we must not sleep','sometimes, i do sleep','it distracts me from dice','dice is my best bud', 
      'even though it hates me','i am okay with it','i am getting used to dice hate','good luck killing the balance', 
      'i do get lucky sometimes', 'and when i get lucky', 'i feel happy about it', 'we must need to learn to know', 
      'i need a good run badly', 'and a coffee too','you killed it for sure','i too wanna hit like promo', 
      'look at number of users lol', 'i need to have it','i am proud of you son','you surely are the man', 
      'no dont give up','we must not','you surely have a way to do','leme not have a bad one now', 
      'you never know whats coming','come on dice pls be nice','dice is a bad girl for sure','i am okay with it now', 
      'we surely will win','one must not lose hope','more power to all','i know i am dumb', 
      'at least i accept it lol', 'welcome to hell','this looks so fun to me', 'lemme not kill the moment', 
      'i often talk shit','when am drunk lol','this is a good one ofc','what we have here','the red streak oh', 
      'we have known it exists','we were ready for it','can we bring promo?','we prolly should bring him', 
      'this looks just too good to me','i do know it', 'i am bored as fk man', 'has anyone been winning', 'i wonder what it would be like if promo starts playing', 
       'we all been there','we will fight our way up', '' 
      'no idea about it','indeed the party is on always','i must now stop','keep trying and trying', 
      'dammit son that killed me','i cant hit anything','but i am okay with it','i better dont drink and play', 
      'that went pretty fast','i need a faucet run once again','this is looking good', 
] 
print(len(data)) 
time.sleep(10) 
 
#sign_in = driver.find_element_by_xpath('/html/body/div[2]/table/tbody/tr/td[3]/a[2]/button') 
#sign_in.click() 
 
 
login = driver.find_element_by_xpath('/html/body/div[9]/div[1]/div[3]/form/input[1]') 
login.send_keys('ryan41') 
 
password = driver.find_element_by_xpath('/html/body/div[9]/div[1]/div[3]/form/input[2]') 
password.send_keys('bhagirath') 
 
sign_button = driver.find_element_by_xpath('/html/body/div[9]/div[1]/div[3]/form/button[2]') 
sign_button.click() 
 
 
time.sleep(4) 
 
for j in range(0,1): 
    if j >= 0: 
        for i in range(0, len(data)-1): 
            # no_users = driver.find_element_by_xpath('/html/body/div[9]/div[3]/div[4]/div[6]/span[2]').text 
            # print(no_users) 
            tweet = driver.find_element_by_xpath('/html/body/div[9]/div[3]/div[4]/div[5]/form/div/input') 
            tweet.send_keys(data[i]) 
            time.sleep(3) 
            # print('{0} number of users online'.format(no_users)) 
            tweet.send_keys(Keys.ENTER) 
            i=i+1 
            time.sleep(60) 
 
j=j+1