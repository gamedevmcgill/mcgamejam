import 'package:flutter/material.dart';
import 'package:mcgamejam_website/components/navigation_bar.dart';
import 'package:mcgamejam_website/components/sections/about_section.dart';
import 'package:mcgamejam_website/components/sections/faq_section.dart';
import 'package:mcgamejam_website/components/stylized_components.dart';

class MainContent extends StatelessWidget {
  const MainContent({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return SelectableRegion(
        focusNode: FocusNode(),
        selectionControls: materialTextSelectionControls,
        child: Center(
          child: Container(
              constraints: const BoxConstraints(maxWidth: 1000),
              padding: const EdgeInsets.all(30),
              child: Column(
                  children: const [
                    AboutSection(),
                    FaqSection()
                  ])
          )
        )
    );
  }
}

class MainPage extends StatefulWidget {
  const MainPage({Key? key}) : super(key: key);

  @override
  State<StatefulWidget> createState() => MainPageState();

  static MainPageState of(BuildContext context) => context.findAncestorStateOfType<MainPageState>()!;
}

class MainPageState extends State<MainPage> {
  int _selectedIndex = 0;

  set selectedIndex(int index) {
    setState(() {
      _selectedIndex = index;
    });
  }

  int get selectedIndex => _selectedIndex;

  @override
  Widget build(BuildContext context) {
    return PreferredSize(
        preferredSize: const Size(1920, 1080),
        child: LayoutBuilder(
            builder: (BuildContext context, BoxConstraints constraints) {
              final isNarrow = constraints.maxWidth < 1000;
              if (isNarrow) {
                // mobile
                return Scaffold(
                    appBar: AppBar(
                      title: const McGameJamTitle(),
                    ),
                    bottomNavigationBar: const NewNavBar(),
                    body: const MainContent());
              } else {
                // desktop
                return Scaffold(
                    appBar: AppBar(
                      title: const McGameJamTitle(),
                    ),
                    body: Row(
                      children: [
                        NewNavRail(),
                        const Expanded(child: MainContent())
                      ],
                    ));
              }
            }));
  }

}
