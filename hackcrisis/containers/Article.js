import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';
import Wrapper from '../components/Wrapper';
import globalStyles from '../globalStyles';
import Navbar from '../components/Navbar';
import PropTypes from "prop-types";
import Home from "./Home";

export default class Article extends Component {
  render() {
    return (
      <Wrapper>
        <View style={globalStyles.innerContainer}>
          <Navbar
            title="COVID-19"
            icon="arrow-left"
            handlePress={() => this.props.navigation.navigate('Home')}
          />

          <Text style={globalStyles.title}>
            Fakty i mity na temat koronawirusa
          </Text>

          <Text style={globalStyles.bold}>
            Czym jest koronawirus?
          </Text>
          <Text style={globalStyles.paragraph}>
            Jest to wirus RNA osłonięty błoną tłuszczową (lipidową). Dzięki takiej budowie można mu zapobiegać przez zastosowanie środków chemicznych, takich jak zwykłe mydło, alkohol min. 60-70%, preparaty do dezynfekcji i inne wirusobójcze.
          </Text>

          <Text style={globalStyles.bold}>
            Jaką chorobę wywołuje koronawirus?
          </Text>
          <Text style={globalStyles.paragraph}>
            Nowy koronawirus SARS-Cov-2 wywołuje chorobę o nazwie COVID-19. Najczęściej występujące objawy choroby to gorączka, kaszel, duszność, problemy z oddychaniem. Chorobie mogą towarzyszyć bóle mięśni i zmęczenie.
          </Text>

          <Text style={globalStyles.bold}>
            Na czym polega leczenie?
          </Text>
          <Text style={globalStyles.paragraph}>
            Decyzję o sposobie leczenia podejmuje lekarz. Leczenie jest wyłącznie objawowe, czyli polega na leczeniu objawów choroby, takich jak gorączka lub problemy z oddychaniem. W literaturze naukowej opisuje się przypadki skutecznego wyleczenia pacjentów zakażonych koronawirusem za pomocą dotychczas znanych leków. 13 marca 2020 r. Urząd Rejestracji Produktów Leczniczych, Wyrobów Medycznych i Produktów Biobójczych (URPL) wydał pozytywną decyzję w sprawie zmiany do pozwolenia na dopuszczenie do obrotu dla leku zawierającego chlorochinę, polegającą na dodaniu nowego wskazania terapeutycznego: „Leczenie wspomagające w zakażeniach koronawirusami typu beta takimi jak SARS-CoV, MERS-CoV i SARS-CoV-2”. Jak dotąd nie są dostępne dane dotyczące skuteczności chlorochiny u chorych z COVID-19 poza Chińską Republiką Ludową. Producent zabezpieczył zapas leku na potrzeby Ministerstwa Zdrowia oraz Agencji Rezerw Materiałowych. Zgodnie z deklaracją producenta, chlorochina będzie dystrybuowana do pacjentów z COVID-19 zgodnie z dyspozycjami Ministra Zdrowia. Jeszcze przed decyzją URPL, po uzyskaniu zgody komisji bioetycznej, chlorochinę w połączeniu z lopinawirem i rytonawirem zastosowano u chorych z ciężkim przebiegiem COVID-19 w Wojewódzkim Specjalistycznym Szpitalu im. Gromkowskiego we Wrocławiu.
          </Text>

          <Text style={globalStyles.bold}>
            Czy są jakieś specjalne leki zapobiegające nowemu koronawirusowi lub leczące go?
          </Text>
          <Text style={globalStyles.paragraph}>
            Do tej pory nie ma konkretnego leku zalecanego do zapobiegania lub leczenia nowego koronawirusa. Osoby zakażone wirusem otrzymują leczenie objawowe oraz leczenie ewentualnych powikłań bakteryjnych. Jednocześnie 13 marca 2020 r. Urząd Rejestracji Produktów Leczniczych, Wyrobów Medycznych i Produktów Biobójczych (URPL) wydał pozytywną decyzję w sprawie zmiany do pozwolenia na dopuszczenie do obrotu dla leku zawierającego chlorochinę, polegającą na dodaniu nowego wskazania terapeutycznego: „Leczenie wspomagające w zakażeniach koronawirusami typu beta takimi jak SARS-CoV, MERS-CoV i SARS-CoV-2”. Jak dotąd nie są dostępne dane dotyczące skuteczności chlorochiny u chorych z COVID-19 poza Chińską Republiką Ludową. Producent zabezpieczył zapas leku na potrzeby Ministerstwa Zdrowia oraz Agencji Rezerw Materiałowych. Zgodnie z deklaracją producenta, chlorochina będzie dystrybuowana do pacjentów z COVID-19 zgodnie z dyspozycjami Ministra Zdrowia. Jeszcze przed decyzją URPL, po uzyskaniu zgody komisji bioetycznej, chlorochinę w połączeniu z lopinawirem i rytonawirem zastosowano u chorych z ciężkim przebiegiem COVID-19 w Wojewódzkim Specjalistycznym Szpitalu im. Gromkowskiego we Wrocławiu.
          </Text>

          <Text style={globalStyles.bold}>
            Czy antybiotyki są skuteczne w zapobieganiu nowemu koronawirusowi i w jego leczeniu?
          </Text>
          <Text style={globalStyles.paragraph}>
            Nie, antybiotyki działają przeciwko bakteriom, ale nie działają przeciwko wirusom. Nowy koronawirus jest wirusem, dlatego antybiotyki nie powinny być stosowane jako środek zapobiegawczy lub leczniczy. Osoby hospitalizowany z powodu koronawirusa mogą otrzymywać antybiotyki, jeśli wystąpi zakażenie bakteryjne, wtórne w stosunku do wirusowego.
          </Text>

          <Text style={globalStyles.bold}>
            Czy w ciągu 14 dni rozwoju wirusa pacjent już zaraża?
          </Text>
          <Text style={globalStyles.paragraph}>
            Według Światowej Organizacji Zdrowia (WHO) okres inkubacji, czyli okres od zarażenia pacjenta a początkiem występowania u niego objawów, w przypadku wirusa powodującego COVID-19 waha się pomiędzy 1-14 dni, najczęściej jest to około 5 dni (WHO zastrzega, że informacje te mogą być akutalizowane, w miarę spływania danych). Natomiast u części zarażonych objawy mogą w ogóle nie występować. Niestety osoby bez objawów mogą być źródłem zakażenia.
          </Text>

          <Text style={globalStyles.bold}>
            Czy zarażona kobieta w ciąży może przekazać wirusa nienarodzonemu dziecku lub podczas porodu?
          </Text>
          <Text style={globalStyles.paragraph}>
            Obecnie brak dowodów naukowych wskazujących na transmisje wirusa SARS-CoV-2 od matki do płodu. Dostępne badania naukowe wśród noworodków urodzonych przez matki z COVID-19 wskazują, że żadne z noworodków nie miało wyniku pozytywnego na obecność wirusa powodującego COVID-19. Dodatkowo nie stwierdzono wirusa w próbkach płynu owodniowego ani w mleku matki. Niemniej jednak, należy pamiętać, że każde zagrożenie dla zdrowia i życia ciężarnej kobiety jest również zagrożeniem dla zdrowia i życia jej nienarodzonego dziecka. Nawet jeśli wirus nie zostanie przeniesiony na płód lub noworodka, pogorszenie stanu zdrowia matki, spowodowane przez chorobę, może zagrozić życiu i zdrowiu jej nienarodzonego dziecka. Dlatego, w przypadku wystąpienia niepokojących objawów, zwłaszcza w przypadku kobiety ciężarnej, zalecane jest poszukanie pomocy medycznej.
          </Text>

          <Text style={globalStyles.bold}>
            Czy osoby starsze i młodsze są na równie podatne na koronawirusa?
          </Text>
          <Text style={globalStyles.paragraph}>
            Ludzie w każdym wieku mogą zostać zainfekowani przez nowy koronawirus. Osoby starsze, a także osoby z istniejącymi schorzeniami przewlekłymi (takimi jak astma, cukrzyca, choroby serca) wydają się bardziej podatne ma wystąpienie cięższych objawów choroby. WHO zaleca osobom w każdym wieku podjęcie kroków w celu ochrony przed wirusem, np. poprzez przestrzeganie zasad higieny rąk i higieny dróg oddechowych.
          </Text>

          <Text style={globalStyles.bold}>
            Gdzie znajdę aktualne informacje dotyczące liczby chorych w Polsce?
          </Text>
          <Text style={globalStyles.paragraph}>
            Na stronie gov.pl/koronawirus znajdziesz mapę zarażeń koronawirusem. Dane tam zamieszczane pochodzą z Ministerstwa Zdrowia i są na bieżąco aktualizowane.
          </Text>

          <Text style={globalStyles.bold}>
            Ile się czeka na wyniki testu koronawirusa?
          </Text>
          <Text style={globalStyles.paragraph}>
            Samo badanie próbki trwa kilka godzin. Jeśli badanie trzeba powtórzyć, to ocena pobranego wymazu może trwać nawet kilkadziesiąt godzin. Należy doliczyć czas od pobrania do przewiezienia próbki do laboratorium (to zależy od tego, jak daleko jest miejsce, gdzie pobrano wymaz, od najbliższego laboratorium wykonującego badanie). Wszystko zależy zatem od logistyki.
          </Text>

          <Text style={globalStyles.bold}>
            Jak często występują objawy?
          </Text>
          <Text style={globalStyles.paragraph}>
            W 80% przypadków choroba przebiega łagodnie. Ciężki przebieg choroby obserwuje się u ok. 15–20% osób. Do zgonów dochodzi u 2–3% osób chorych. Światowa Organizacja Zdrowia (WHO) szacuje, że śmiertelność poza Chinami wynosi tylko 0,7%.
          </Text>

          <Text style={globalStyles.bold}>
            Co to znaczy, że ktoś miał kontakt z osobą zakażoną koronawirusem SARS-CoV-2?
          </Text>
          <Text style={globalStyles.paragraph}>
            Pozostawał w bezpośrednim kontakcie z osobą chorą lub w kontakcie w odległości mniej niż 2 metrów przez ponad 15 minut.
            Prowadził rozmowę z osobą z objawami choroby twarzą w twarz przez dłuższy czas.
            Osoba zakażona należy do grupy najbliższych przyjaciół lub kolegów.
            Osoba mieszkająca w tym samym gospodarstwie domowym, co osoba chora, lub w tym samym pokoju hotelowym.
          </Text>

          <Text style={globalStyles.bold}>
            Czy koronawirusem można zarazić się poprzez kontakt z wodą, w której były osoby zakażone?
          </Text>
          <Text style={globalStyles.paragraph}>
            Według dostępnej wiedzy naukowej transmisja wirusa odbywa się głównie drogą kropelkową. Istnienie niewiele dowodów naukowych wskazujących na transmisję wirusa drogą fekalno-oralną. W związku z powyższym ryzyko zakażenia koronawirusem poprzez kontakt z wodą na basenie, z którego korzystały osoby zakażone, jest niewielkie.
          </Text>

          <Text style={globalStyles.bold}>
            Jakie płyny dezynfekujące ręce są rekomendowane?
          </Text>
          <Text style={globalStyles.paragraph}>
            Światowa Organizacja Zdrowia (WHO) zaleca stosowanie płynów dezynfekujących na bazie alkoholu (min. 60%). Ponadto, należy pamiętać o prawidłowym myciu rąk wodą z mydłem przez minimum 30 sekund.
          </Text>

          <Text style={globalStyles.bold}>
            Czy osoby wyleczone mogą zarażać?
          </Text>
          <Text style={globalStyles.paragraph}>
            Obecnie brak dowodów naukowych na transmisję wirusa od ozdrowieńców. Szacuje się, że okres inkubacji wynosi od 2 do 14 dni i w tym okresie czasu istnieje ryzyko transmisji zakażenia.
          </Text>

          <Text style={globalStyles.bold}>
            Czy wirus SARS-Cov-2 może być przenoszony na obszarach o gorącym i wilgotnym klimacie?
          </Text>
          <Text style={globalStyles.paragraph}>
            Z dotychczasowych danych wynika, że wirus SARS-Cov-2 może się przenosić we wszystkich opbszarach, w tym o gorącym i wilgotnym klimacie. Niezależnie od klimatu, należy stosować środki ochronne w przypadku zamieszkania lub podróży do obszaru z transmisją SARS-Cov-2. Najlepszym sposobem ochrony przed SARS-Cov-2 jest częste mycie rąk. W ten sposób eliminowane są wirusy, które mogą znajdować się na rękach i następnie przedostać się do organizmu po dotknięciu oczu, ust lub nosa.
          </Text>

          <Text style={globalStyles.bold}>
            Czy koronawirus przenosi się przez ukąszenia komarów?
          </Text>
          <Text style={globalStyles.paragraph}>
            Do tej pory nie było żadnych informacji ani dowodów sugerujących, że nowy koronawirus może być przenoszony przez komary. Nowy koronawirus jest wirusem układu oddechowego, który rozprzestrzenia się głównie poprzez kropelki powstające, gdy zarażona osoba kaszle lub kicha, albo poprzez kropelki śliny lub wydzieliny z nosa. Aby się zabezpieczyć, należy często myć ręce wodą i mydłem oraz dezynfekować je płynem na bazie alkoholu. Należy także unikać bliskiego kontaktu z każdym, kto kaszle i kicha.
          </Text>

          <Text style={globalStyles.bold}>
            Jak skuteczne są skanery termiczne w wykrywaniu osób zainfekowanych nowym koronawirusem?
          </Text>
          <Text style={globalStyles.paragraph}>
            Skanery termiczne skutecznie wykrywają osoby, u których występuje gorączka (tj. mających wyższą niż normalna temperatura ciała), w tym gorączka spowodowaną zakażeniem nowym koronawirusem. Skanery nie mogą jednak wykryć osób zarażonych, ale jeszcze niegorączkujących. Dzieje się tak, ponieważ zarażone osoby mogą rozwinąć objaw, jakim jest gorączka, średnio w ciągu od 2 do 10 dni od zarażenia. U części osób zakażenie może przebiegać w ogóle bez wystąpienia gorączki. Osoby te mogą zarażać mimo braku gorączki i nie wykryje ich skaner termiczny.
          </Text>

          <Text style={globalStyles.bold}>
            Gdzie do tej pory na świecie stwierdzono przypadki zakażenia koronawirusem?
          </Text>
          <Text style={globalStyles.paragraph}>
            Najwięcej potwierdzonych przypadków zakażenia nowym koronawirusem zarejestrowano w Chinach (99%), głównie w prowincji Hubei, a także w Korei Południowej oraz we Włoszech. Aktualne informacje możesz znaleźć na stronie Światowej Organizacji Zdrowia (WHO).
          </Text>

          <Text style={globalStyles.bold}>
            Źródło
          </Text>
          <Text style={globalStyles.paragraph}>
            https://www.gov.pl/web/koronawirus
            Stan na 19.03.2020
          </Text>

        </View>
      </Wrapper>
    );
  }
}

Article.propTypes = {
  navigation: PropTypes.object.isRequired,
};
