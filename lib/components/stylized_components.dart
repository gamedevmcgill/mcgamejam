import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class McGameJamTitle extends StatelessWidget {
  const McGameJamTitle({super.key});

  @override
  Widget build(BuildContext context) {
    return RichText(
      text: const TextSpan(
        style: TextStyle(
          fontSize: 18.0
        ),
        children: [
          TextSpan(text: "MC", style: TextStyle(color: Colors.red)),
          TextSpan(text: "GAMEJAM", style: TextStyle(color: Colors.black)),
        ]
      ),
    );
  }
  
}