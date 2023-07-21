import 'package:flutter/material.dart';
import 'package:mcgamejam_website/components/main_page.dart';
import 'package:flutter_gen/gen_l10n/app_localizations.dart';
import 'dart:html';

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
      SettingsRepository().setValue('locale', value.languageCode);
      _locale = value;
    });
  }

  Locale getLocale(BuildContext context) {
    if (_locale != null) {
      return _locale!;
    }

    String? settingsLocaleString = SettingsRepository().getValue('locale');
    if (settingsLocaleString == null) {
      final newLocale = Localizations.localeOf(context);
      SettingsRepository().setValue('locale', newLocale.languageCode);
      _locale = newLocale;
    } else {
      final newLocale = Locale(settingsLocaleString);
      _locale = newLocale;
    }

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
      locale: getLocale(context)
    );
  }
}

// singleton
class SettingsRepository {
  static final SettingsRepository _instance = SettingsRepository._internal();

  factory SettingsRepository() {
    return _instance;
  }

  SettingsRepository._internal();

  final Storage _localStorage = window.localStorage;

  String? getValue(String key) {
    return _localStorage[key];
  }

  void setValue(String key, String value) {
    _localStorage[key] = value;
  }

  void removeValue(String key) {
    _localStorage.remove(key);
  }
}
