{
  description = "Flake";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixpkgs-unstable";
  };

  outputs =
    {
      self,
      nixpkgs,
    }:
    let
      system = "x86_64-linux";
      pkgs = nixpkgs.legacyPackages.${system};
    in
    {

      devShells.${system}.default =
        pkgs.mkShell.override
          {
            # Override stdenv in order to change compiler:
          }
          {

            buildInputs = with pkgs; [
              act
              age
              ssh-to-age
              sops
              pre-commit
              bind
              clang-tools
              cmake
              codespell
              cppcheck
              doxygen
              gcc
              gdb
              git
              git-crypt
              graphviz
              gtest
              imagemagick
              inkscape
              just
              ninja
              nodePackages.prettier
              openssl
              rip2
              ruff
              stdenv.cc.cc.lib
              stdenv.cc.cc
              svg2pdf
              taglib
              tectonic
              uncrustify
              uv
              wget
              zip
              zlib
              python313
            ];

            shellHook = ''
              just bootstrap
              source .venv/bin/activate
              export PYTHONPATH=":$PYTHONPATH:$PWD/libraries/.build/wrapper"
              echo done!
            '';
          };
    };
}
