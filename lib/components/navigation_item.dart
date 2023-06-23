import 'package:flutter/material.dart';

class NavigationItem extends StatelessWidget {

  final String title;
  final VoidCallback? onPressed;
  final EdgeInsets padding;

  const NavigationItem({super.key, required this.title, this.onPressed, this.padding = const EdgeInsets.symmetric(horizontal: 30.0)});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: padding,
      child: ButtonBar(
        children: [
          TextButton(
            onPressed: onPressed,
            child: Text(title),
          ),
        ],
      )
    );
  }
}