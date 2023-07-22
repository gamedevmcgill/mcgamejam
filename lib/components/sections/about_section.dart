import 'package:flutter/material.dart';
import 'package:mcgamejam_website/main.dart';
import 'package:flutter_gen/gen_l10n/app_localizations.dart';

class AboutSection extends StatelessWidget {
  const AboutSection({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Text(
          AppLocalizations.of(context)!.whatIsMcGameJam,
          style: Theme.of(context).textTheme.headline4,
        ),
        Text(
          AppLocalizations.of(context)!.mcGameJamDescription,
          style: Theme.of(context).textTheme.bodyLarge
        )
      ]
    );
  }
}