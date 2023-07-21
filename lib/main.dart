import 'package:flutter/material.dart';
import 'package:mcgamejam_website/components/main_page.dart';
import 'package:flutter_gen/gen_l10n/app_localizations.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatefulWidget {
  const MyApp({super.key});

  @override
  State<StatefulWidget> createState() => MyAppState();

  static MyAppState of(BuildContext context) => context.findAncestorStateOfType<MyAppState>()!;
}

class MyAppState extends State<MyApp> {
  Locale? _locale;

  set locale(Locale value) {
    if (_locale == value) {
      return;
    }
    setState(() {
      _locale = value;
    });
  }

  Locale getLocale(BuildContext context) {
    _locale ??= Localizations.localeOf(context);
    return _locale!;
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        title: 'McGameJam 2024',
        localizationsDelegates: AppLocalizations.localizationsDelegates,
      supportedLocales: const [
        Locale('en'),
        Locale('fr'),
      ],
      theme: ThemeData(colorSchemeSeed: const Color(0xff6750a4), useMaterial3: true),
      home: const MainPage(),
      locale: _locale,
    );
  }
}
