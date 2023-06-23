import 'package:flutter/material.dart';
import 'package:mcgamejam_website/components/navigation_bar.dart';
import 'package:mcgamejam_website/components/stylized_components.dart';

class MainPage extends StatelessWidget {
  const MainPage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return PreferredSize(
        preferredSize: const Size(1920, 1080),
        child: LayoutBuilder(
            builder: (BuildContext context, BoxConstraints constraints) {
          final isNarrow = constraints.maxWidth < 1000;
          if (isNarrow) {
            return Scaffold(
                appBar: AppBar(
                  title: const McGameJamTitle(),
                ),
                drawer: const NavigationBarDrawer(),
                body: const Text("Hi"));
          } else {
            return const Scaffold(
                appBar: PreferredSize(
                    preferredSize: Size(1000, 500),
                    child: NavigationBarDefault()),
                body: Text("Hi"));
          }
        }));
  }
}
