import 'package:flutter/material.dart';
import 'package:mcgamejam_website/main.dart';
import 'package:flutter_gen/gen_l10n/app_localizations.dart';

Widget buildFaqQuestionAnswerPair(BuildContext context, String question, String answer) {
  return Column(
    children: [
      Text(
        question,
        style: Theme.of(context).textTheme.headline6
      ),
      Text(
        answer,
        style: Theme.of(context).textTheme.bodyLarge
      )
    ]
  );
}

class FaqSection extends StatelessWidget {
  const FaqSection({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Text(
          AppLocalizations.of(context)!.faq,
          style: Theme.of(context).textTheme.headline4,
        ),
        buildFaqQuestionAnswerPair(context, AppLocalizations.of(context)!.whenAndWhere, AppLocalizations.of(context)!.timeAndLocation),
      ]
    );
  }
}