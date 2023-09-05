export const mode: "production" | "development";
import MiniCssExtractPlugin = require("mini-css-extract-plugin");
import CopyPlugin = require("copy-webpack-plugin");
import HtmlWebpackPlugin = require("html-webpack-plugin");
import CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
export declare let entry: string;
export declare namespace output {
    let path: string;
    let filename: string;
    let clean: boolean;
}
export declare namespace module {
    let rules: ({
        test: RegExp;
        use: string[];
        type?: undefined;
        exclude?: undefined;
    } | {
        test: RegExp;
        type: string;
        use?: undefined;
        exclude?: undefined;
    } | {
        test: RegExp;
        use: string;
        exclude: RegExp;
        type?: undefined;
    })[];
}
export declare let devtool: string;
export declare let plugins: (MiniCssExtractPlugin | CopyPlugin | HtmlWebpackPlugin)[];
export declare namespace resolve {
    let extensions: string[];
}
export declare namespace optimization {
    let minimize: boolean;
    let minimizer: (string | CssMinimizerPlugin<CssMinimizerPlugin.CssNanoOptionsExtended>)[];
}
