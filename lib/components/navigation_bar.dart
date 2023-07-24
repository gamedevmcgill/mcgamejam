import 'package:flutter/material.dart';
import 'package:flutter_gen/gen_l10n/app_localizations.dart';
import 'package:mcgamejam_website/main.dart';

import 'main_page.dart';

class NewNavBar extends StatefulWidget {
  const NewNavBar({Key? key}) : super(key: key);

  @override
  State<StatefulWidget> createState() => NewNavBarState();
}

class NewNavBarState extends State<NewNavBar> {
  @override
  Widget build(BuildContext context) {
    return NavigationBar(
      selectedIndex: MainPage.of(context).selectedIndex,
      destinations: [
        NavigationDestination(icon: Icon(Icons.home_outlined), label: AppLocalizations.of(context)!.homeTitle),
        NavigationDestination(icon: Icon(Icons.info_outline_rounded), label: AppLocalizations.of(context)!.aboutTitle),
        NavigationDestination(icon: Icon(Icons.question_answer_outlined), label: "FAQ"),
        NavigationDestination(icon: Icon(Icons.app_registration_rounded), label: AppLocalizations.of(context)!.signUpTitle),
        NavigationDestination(icon: Icon(Icons.language_rounded), label: AppLocalizations.of(context)!.langToggle),
      ],
      onDestinationSelected: (index) {
        switch (index) {
          case 4:
            MyApp.of(context).locale = Locale.fromSubtags(languageCode: Localizations.localeOf(context).languageCode == 'en' ? 'fr' : 'en');
            break;
          default:
            setState(() {
              MainPage.of(context).selectedIndex = index;
            });
            break;
        }
      },
    );
  }
}

class NewNavRail extends StatelessWidget {
  const NewNavRail({super.key});

  @override
  Widget build(BuildContext context) {
    return NavigationRail(
      selectedIndex: MainPage.of(context).selectedIndex,
      extended: true,
      destinations: [
        NavigationRailDestination(icon: Icon(Icons.home_outlined), label: Text(AppLocalizations.of(context)!.homeTitle)),
        NavigationRailDestination(icon: Icon(Icons.info_outline_rounded), label: Text(AppLocalizations.of(context)!.aboutTitle)),
        NavigationRailDestination(icon: Icon(Icons.question_answer_outlined), label: Text("FAQ")),
        NavigationRailDestination(icon: Icon(Icons.app_registration_rounded), label: Text(AppLocalizations.of(context)!.signUpTitle)),
        NavigationRailDestination(icon: Icon(Icons.language_rounded), label: Text(AppLocalizations.of(context)!.langToggle)),
      ],
      onDestinationSelected: (index) {
        switch (index) {
          case 4:
            MyApp.of(context).locale = Locale.fromSubtags(languageCode: Localizations.localeOf(context).languageCode == 'en' ? 'fr' : 'en');
            break;
          default:
            MainPage.of(context).selectedIndex = index;
            break;
        }
      },
    );
  }
  
}
