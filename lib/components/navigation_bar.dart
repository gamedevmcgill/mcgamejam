import 'dart:html';

import 'package:flutter/material.dart';
import 'package:mcgamejam_website/components/navigation_item.dart';
import 'package:flutter_gen/gen_l10n/app_localizations.dart';
import 'package:mcgamejam_website/components/stylized_components.dart';
import 'package:mcgamejam_website/main.dart';

class NavigationBarDefault extends StatefulWidget {
  const NavigationBarDefault({Key? key})
      : super(key: key);

  @override
  State<StatefulWidget> createState() => NavigationBarDefaultState();
}

const englishDropDown = DropdownMenuItem(value: 'en', child: Text('English'));
const frenchDropDown = DropdownMenuItem(value: 'fr', child: Text('Français'));

List<DropdownMenuItem> createLocaleList(String locale) {
  var localeList = locale == 'en'
      ? [englishDropDown, frenchDropDown]
      : [frenchDropDown, englishDropDown];
  return localeList;
}

class NavigationBarDefaultState extends State<NavigationBarDefault> {
  @override
  Widget build(BuildContext context) {
    final locale = MyApp.of(context).getLocale(context);
    final localeList = createLocaleList(locale.languageCode);
    return SizedBox(
      height: 50.0,
      child: Row(
        mainAxisSize: MainAxisSize.max,
        children: [
          const Padding(
            padding: EdgeInsets.symmetric(horizontal: 30.0),
            child: McGameJamTitle(),
          ),
          NavigationItem(
              title: AppLocalizations.of(context)!.aboutTitle,
              onPressed: () {}),
          NavigationItem(title: 'FAQ', onPressed: () {}),
          NavigationItem(
              title: AppLocalizations.of(context)!.signUpTitle,
              onPressed: () {}),
          // push the dropdown to the right
          const Spacer(),
          Padding(
            padding: const EdgeInsets.only(right: 30.0),
            child: DropdownButton(
              items: localeList,
              value: locale.languageCode,
              onChanged: (value) {
                MyApp.of(context).locale = Locale(value.toString());
              },
            ),
          )
        ],
      ),
    );
  }
}

class NavigationBarDrawer extends StatelessWidget {
  const NavigationBarDrawer({super.key});

  @override
  Widget build(BuildContext context) {
    return Drawer(
        child: SafeArea(
          child: Column(
            children: [
              ListTile(
                title: Text(AppLocalizations.of(context)!.aboutTitle),
                onTap: () {
                },
              ),
              ListTile(
                title: const Text('FAQ'),
                onTap: () {
                },
              ),
              ListTile(
                title: Text(AppLocalizations.of(context)!.signUpTitle),
                onTap: () {
                },
              ),
              ListTile(
                title: DropdownButton(
                  items: createLocaleList(Localizations.localeOf(context).languageCode),
                  value: Localizations.localeOf(context).languageCode,
                  onChanged: (value) {
                    MyApp.of(context).locale = Locale.fromSubtags(languageCode: value.toString());
                  },
                )
              )
            ],
          ),
        )
    );
  }

}

class NewNavBar extends StatelessWidget {
  const NewNavBar({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return NavigationBar(
      selectedIndex: 0,
      destinations: [
        NavigationDestination(icon: Icon(Icons.home_outlined), label: AppLocalizations.of(context)!.homeTitle),
        NavigationDestination(icon: Icon(Icons.info_outline_rounded), label: AppLocalizations.of(context)!.aboutTitle),
        NavigationDestination(icon: Icon(Icons.question_answer_outlined), label: "FAQ"),
        NavigationDestination(icon: Icon(Icons.app_registration_rounded), label: AppLocalizations.of(context)!.signUpTitle),
        NavigationDestination(icon: Icon(Icons.language_rounded), label: AppLocalizations.of(context)!.langToggle),
      ],
      onDestinationSelected: (index) {
        switch (index) {
          case 0:
            break;
          case 1:
            break;
          case 2:
            break;
          case 4:
            MyApp.of(context).locale = Locale.fromSubtags(languageCode: Localizations.localeOf(context).languageCode == 'en' ? 'fr' : 'en');
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
      selectedIndex: 0,
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
          case 0:
            break;
          case 1:
            break;
          case 2:
            break;
          case 4:
            MyApp.of(context).locale = Locale.fromSubtags(languageCode: Localizations.localeOf(context).languageCode == 'en' ? 'fr' : 'en');
            break;
        }
      },
    );
  }
  
}
